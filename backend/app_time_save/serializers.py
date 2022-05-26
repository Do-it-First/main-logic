# serializers.py
from rest_framework import serializers

from .models import Time


class TimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Time
        fields = (
            '_id',
            'counted',
            'last_time',
        )
        # fields = '__all__'
