# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from datetime import datetime
from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=300);
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=datetime.now, blank = True )
    def __str__(self):
        return self.title
