from __future__ import absolute_import, unicode_literals
from django.conf import settings
from celery import Celery
import os
import sys
from kombu.utils import encoding
sys.modules['celery.utils.encoding'] = encoding


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
# app = Celery('backend')
# app = Celery('backend', broker='redis://redis:6379/0')
app = Celery('backend', broker='redis://redis:6379/1')
app.config_from_object('django.conf:settings', namespace='CELERY')
# Load task modules from all registered Django apps.
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)


@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
