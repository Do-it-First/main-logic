# serializers.py
from rest_framework import serializers

from .models import Navertoon


class NavertoonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Navertoon
        fields = (
            '_id',
            'platform',
            'day',
            'title',
            'thumbnail',
            'detail_link',
            'introduction',
            'writer',
            'genre',
            'age',
        )
        # fields = '__all__'
