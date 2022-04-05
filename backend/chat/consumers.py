import json
import time
from channels.generic.websocket import WebsocketConsumer
# import schedule

class ChatConsumer(WebsocketConsumer):
    def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        if message.lower() == 'hello':
            pass