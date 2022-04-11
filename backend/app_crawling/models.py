from djongo import models
class Navertoon(models.Model):
		_id = models.ObjectIdField(primary_key = True)
		day = models.TextField()
		title = models.TextField()
		thumbnail = models.TextField()
		detail_link = models.TextField()
		introduction = models.TextField()
		writer = models.TextField()
		genre = models.TextField()
		age = models.TextField()
		def __str__(self):
			return self.name