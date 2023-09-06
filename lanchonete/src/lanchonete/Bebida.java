package lanchonete;

public class Bebida {
    private String nome;
    private String tamanho;
    private double valor;

    public Bebida(String nome, String tamanho, double valor) {
        this.nome = nome;
        this.tamanho = tamanho;
        this.valor = valor;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTamanho() {
        return tamanho;
    }

    public void setTamanho(String tamanho) {
        this.tamanho = tamanho;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

}
