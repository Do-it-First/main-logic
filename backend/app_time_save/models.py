from djongo import models


class Time(models.Model):
    _id = models.ObjectIdField(primary_key=True)
    counted = models.IntegerField()
    last_time = models.DateTimeField(auto_now_add=True)
