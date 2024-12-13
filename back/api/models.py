from django.db import models

class Produto(models.Model):
    codigoProduto = models.AutoField(primary_key=True)  # Cria um ID automático
    tituloProduto = models.CharField(max_length=255)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    descricao = models.CharField(max_length=255)
    imagensProduto = models.JSONField(default=dict)  # Armazena as imagens em um campo JSON
    categoriaProduto = models.CharField(max_length=255)
    classificacaoProduto = models.CharField(max_length=255, default='Desconhecido')
    exibirHome = models.BooleanField(default=True)


