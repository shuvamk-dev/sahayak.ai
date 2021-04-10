import time
from rev_ai import apiclient
from rev_ai.models import CustomVocabulary
from flask import Flask,request,jsonify
app = Flask(__name__)

access_token = "YOUR-ACCESS-TOKEN"
client = apiclient.RevAiAPIClient(access_token)
mit_professors = CustomVocabulary(
    ["Robert Berwick", "Noam Chomsky", "Evelina Fedorenko"]
)
other_scientists = {"phrases": ["Albert Einstein"]}
custom_vocabularies = [mit_professors, other_scientists]


@app.route('/stt/', methods=['GET','POST'])
def dashboard():
  request_data = dict(request.args)
  url = request_data.get('url')
  job = client.submit_job_url(url,
                            metadata=None,
                            callback_url=None,
                            skip_diarization=False,
                            custom_vocabularies=custom_vocabularies,
                            filter_profanity=False,
                            remove_disfluencies=False,
                            delete_after_seconds=None,
                            language=None,
                            custom_vocabulary_id=None)
  print("Submitted Job")
  response = {}
  while True:
      job_details = client.get_job_details(job.id)
      status = job_details.status.name
      print("Job Status : {}".format(status))
      if status == "IN_PROGRESS":
          time.sleep(5)
          continue
      elif status == "FAILED":
          print("Job Failed : {}".format(job_details.failure_detail))
          break
      if status == "TRANSCRIBED":
          list_of_jobs = client.get_list_of_jobs(limit=None, starting_after=None)
          response["text"] = client.get_transcript_text(job.id)
          transcript_json = client.get_transcript_json(job.id)
          transcript_obj = client.get_transcript_object(job.id)
          captions = client.get_captions(job.id)
          break
  return jsonify(response)


if __name__ == '__main__':
   app.run(debug = True)
  
