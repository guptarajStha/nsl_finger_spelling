from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from modelIntegrationPage import views
from django.conf import settings
from django.conf.urls.static import static


# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('predictLetter',csrf_exempt(views.predictLetter),name="Letter Prediction"),
# ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns = [
    path('predict-letter/', views.predictLetter.as_view()),
    path('predict-letter-only/',views.predictLetterOnly.as_view()),
    path('word-formation/',views.wordFormation.as_view()),
     path('text-to-speech/',views.text_to_speech.as_view()),
]