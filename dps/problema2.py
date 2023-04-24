'''
Pessoa que gosta de investimentos
1% ao mês
10 reais iniciais
5 reais cada mês
'''
mes = int(input('Digite quantos meses você deseja saber o rendimento do seu dinheiro adicionando 5 reais ao mês: '))
din = 10
cont = 0

din *= 1.01 ** mes

while mes != 0:
    din += 5 * 1.01 ** (mes-1)
    mes -= 1
    cont += 1
print(f'Seu dinheiro ao final do investimento em {cont} meses é R${din}')
                                                                                                                                                                                                                      