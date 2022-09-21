import asyncio
import logging
import random

import sys
from strmprivacy.driver import SerializationType, ClientConfig, StrmPrivacyClient
from strmprivacy_quickstart_demo_v1_0_0.quickstart.demo.v1_0_0 import Clicks, mousepositions

log = logging.getLogger(__name__)
log.setLevel(logging.INFO)


class Sender(object):
  """
  An Asynchronous generator that periodically creates an event and sends it to streammachine
  """

  def __init__(self, client):
    self._client = client

  def __aiter__(self):
    return self

  async def __anext__(self):
    event = create_avro_event()
    return await self._client.send(event, SerializationType.AVRO_BINARY)

  async def start_timers(self):
    await self._client.start_timers()


def create_avro_event():
  event = Clicks()

  event.strmMeta.eventContractRef = "quickstart/demo-event-contract/2.0.0"
  event.strmMeta.consentLevels = [random.randint(0, 3)]

  # note the avro names instead of the Simple Schema names
  event.SessionId = f"session-{random.randint(0,10)}"
  event.UserName = f"user-{random.randint(0,10)}"
  event.url = f"url-{random.randint(0,10)}"
  event.PrijsInGb = random.random()*100.0
  event.MousePositions = [
    mousepositions.MousePositions({"x": random.randint(0,1000), "y": random.randint(0,1000)}),
    mousepositions.MousePositions({"x": random.randint(0,1000), "y": random.randint(0,1000)})
  ]
  return event


async def main(config=ClientConfig()):
  client = StrmPrivacyClient(sys.argv[1], sys.argv[2], sys.argv[3], config)
  sender = Sender(client)
  await sender.start_timers()  # re-authorization jwt tokens

  async for response in sender:
    if response == 204:  # event correctly accepted by endpoint
      log.info(f"Event sent, response {response}")
    else:
      log.error(f"Something went wrong while trying to send event to STRM privacy response: {response}")

    await asyncio.sleep(1)


if __name__ == '__main__':
  logging.basicConfig(stream=sys.stderr)
  config = ClientConfig(
      gateway_host="events.dev.strmprivacy.io",
      sts_host="sts.dev.strmprivacy.io"
      )
  asyncio.run(main(config))
