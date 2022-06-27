from django.db import models

# Create your models here.
class Exercise_Data(models.Model):
    ex_id=models.AutoField(primary_key=True)
    path=models.CharField(max_length=100)