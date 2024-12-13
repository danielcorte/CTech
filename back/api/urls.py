from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

from .views import ProdutoListView

urlpatterns = [
    path('produtos/', ProdutoListView.as_view(), name='produto-list'),
    
    path('produtos/<int:id>', views.detalhar_produto, name='produto-detail'),

    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
