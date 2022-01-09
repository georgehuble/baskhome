from django.test import TestCase, Client

"""Проверка работы страниц"""


class StaticURLTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_homepage(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_policy(self):
        response = self.client.get('/policy/')
        self.assertEqual(response.status_code, 200)

    def test_product_list(self):
        response = self.client.get('/list/')
        self.assertEqual(response.status_code, 200)
