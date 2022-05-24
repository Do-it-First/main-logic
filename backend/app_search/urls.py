from django.urls import path
from . import views

urlpatterns = [
    path('', views.Search_from_keyward.as_view())
]
