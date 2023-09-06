package lanchonete;

public class Sanduiche {

    private String nome;
    private String tamanho;
    private String ingredientes;
    private double valor;

    public Sanduiche(String nome, String tamanho, String ingredientes, double valor) {
        this.nome = nome;
        this.ingredientes = ingredientes;
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

    public String getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(String ingredientes) {
        this.ingredientes = ingredientes;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

}
