from django.urls import include, path
from rest_framework import routers
from . import views

# router = routers.DefaultRouter()
# router.register(r'nwdata', views.NavertoonViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', views.Search_from_keyward.as_view())
    # path('webtoon/<str:pk>/', views.WebToonDetail.as_view()),
    # path('platform/', views.Crawling.as_view()),

		# standard DRF Views Example
		# path('path/to/my/view/', MySimpleView.as_view()),
]