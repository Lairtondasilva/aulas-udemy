package lanchonete;

import java.util.ArrayList;

public class Pedido {
    private static int contadorPedidos = 0;
    private int numeroDoPedido;
    private Cliente cliente;
    private ArrayList<Sanduiche> sanduiches;
    private ArrayList<Bebida> bebidas;
    private double valorTotal = 0;

    public Pedido(Cliente cliente) {
        this.numeroDoPedido = ++contadorPedidos;
        this.cliente = cliente;
        this.sanduiches = new ArrayList<>();
        this.bebidas = new ArrayList<>();
    }

    public void adicionarSanduiche(Sanduiche sanduiche) {
        this.valorTotal += sanduiche.getValor();
        sanduiches.add(sanduiche);
    }

    public void adicionarBebida(Bebida bebida) {
        this.valorTotal += bebida.getValor();
        bebidas.add(bebida);
    }

    public void removerSanduiche(Sanduiche sanduiche) {
        if (sanduiches.contains(sanduiche)) {
            this.valorTotal -= sanduiche.getValor();
            sanduiches.remove(sanduiche);
            System.out.println("Sanduíche removido com sucesso!");
        } else {
            System.out.println("Este sanduíche não está no pedido!");
        }
    }

    public void removerBebida(Bebida bebida) {
        if (bebidas.contains(bebida)) {
            this.valorTotal -= bebida.getValor();
            bebidas.remove(bebida);
            System.out.println("Bebida removida com sucesso!");
        } else {
            System.out.println("Esta bebida não está no pedido!");
        }
    }

    public void listarPedido() {
        System.out.println("Pedido #" + this.numeroDoPedido);
        System.out.println("Cliente: " + this.cliente.getNome());
        System.out.println("Sanduíches:");
        for (Sanduiche s : sanduiches) {
            System.out.println("- " + s.getNome() + " - R$ " + s.getValor());
        }
        System.out.println("Bebidas:");
        for (Bebida b : bebidas) {
            System.out.println("- " + b.getNome() + " - R$ " + b.getValor());
        }
        System.out.println("Valor Total: R$ " + this.valorTotal);
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public ArrayList<Sanduiche> getSanduiches() {
        return sanduiches;
    }

    public void setSanduiches(ArrayList<Sanduiche> sanduiches) {
        this.sanduiches = sanduiches;
    }

    public ArrayList<Bebida> getBebidas() {
        return bebidas;
    }

    public void setBebidas(ArrayList<Bebida> bebidas) {
        this.bebidas = bebidas;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

}
