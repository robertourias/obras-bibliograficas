export class UtilService {
  formatarNome(nome: string): string {
    const nomes = this.getCapitalizeNames(
      nome
        .trim()
        .toLocaleLowerCase()
        .split(' ')
    );
    const qtdNome = nomes.length;
    const indexLastName = qtdNome - 1;
    const nomesExcecao = [
      'Filho',
      'Filha',
      'Neto',
      'Neta',
      'Sobrinho',
      'Sobrinha',
      'Junior'
    ];
    let nomeFormatado: string;

    if (qtdNome === 1) {
      nomeFormatado = nome.toLocaleUpperCase();
    } else if (qtdNome === 2) {
      nomeFormatado = nomes[1].toLocaleUpperCase() + ', ' + nomes[0];
    } else if (qtdNome > 2) {
      let ultimoNomeQtd = 1;
      if (nomesExcecao.indexOf(nomes[indexLastName]) > -1) {
        ultimoNomeQtd = 2;
      }
      nomeFormatado =
        nomes
          .slice(ultimoNomeQtd * -1)
          .toString()
          .split(',')
          .join(' ')
          .toLocaleUpperCase() +
        ', ' +
        nomes
          .slice(0, ultimoNomeQtd * -1)
          .toString()
          .split(',')
          .join(' ');
    }

    return nomeFormatado;
  }

  private getCapitalizeNames(arrayNome: string[]): string[] {
    const juncoes = ['da', 'de', 'do', 'das', 'dos'];

    const arrayFormatado = arrayNome.map(item => {
      let nome = item;

      if (juncoes.indexOf(item) === -1) {
        nome = nome.charAt(0).toUpperCase() + nome.slice(1);
      }

      return nome;
    });

    return arrayFormatado;
  }
}
