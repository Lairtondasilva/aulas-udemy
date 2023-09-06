
package lanchonete;

import java.util.ArrayList;
import java.util.Scanner;

public class Lanchonete {
    private ArrayList<Sanduiche> sanduiches;
    private ArrayList<Bebida> bebidas;
    private ArrayList<Cliente> clientes;
    private ArrayList<Pedido> pedidos;

    public Lanchonete() {
        sanduiches = new ArrayList<>();
        bebidas = new ArrayList<>();
        clientes = new ArrayList<>();
        pedidos = new ArrayList<>();
    }

    public void menu() {
        Scanner sc = new Scanner(System.in);
        int opcao;
        do {
            System.out.println("* MENU *");
            System.out.println("1 - Sanduíches");
            System.out.println("2 - Bebidas");
            System.out.println("3 - Clientes");
            System.out.println("4 - Pedidos");
            System.out.println("5 - Sair");
            System.out.print("Digite uma opção: ");
            opcao = sc.nextInt();
            switch (opcao) {
                case 1:
                    menuSanduiches();
                    break;
                case 2:
                    menuBebidas();
                    break;
                case 3:
                    menuClientes();
                    break;
                case 4:
                    menuPedidos();
                    break;
                case 5:
                    System.out.println("Obrigado por utilizar a Lanchonete!");
                    break;
                default:
                    System.out.println("Opção inválida, tente novamente!");
            }
        } while (opcao != 5);
        sc.close();
    }

    public void menuSanduiches() {
        Scanner sc = new Scanner(System.in);
        int opcao;
        do {
            System.out.println("* MENU - SANDUÍCHES *");
            System.out.println("6 - Cadastrar Sanduíche");
            System.out.println("7 - Editar Sanduíche");
            System.out.println("8 - Listar Sanduíches");
            System.out.println("9 - Voltar");
            System.out.print("Digite uma opção: ");
            opcao = sc.nextInt();
            switch (opcao) {
                case 6:
                    cadastrarSanduiche();
                    break;
                case 7:
                    editarSanduiche();
                    break;
                case 8:
                    listarSanduiches();
                    break;
                case 9:
                    System.out.println("Voltando ao menu principal...");
                    break;
                default:
                    System.out.println("Opção inválida, tente novamente!");
            }
        } while (opcao != 9);
    }

    public void menuBebidas() {
        Scanner sc = new Scanner(System.in);
        int opcao;
        do {
            System.out.println("* MENU - BEBIDAS *");
            System.out.println("10 - Cadastrar Bebida");
            System.out.println("11 - Editar Bebida");
            System.out.println("12 - Listar Bebidas");
            System.out.println("13 - Voltar");
            System.out.print("Digite uma opção: ");
            opcao = sc.nextInt();
            switch (opcao) {
                case 10:
                    cadastrarBebida();
                    break;
                case 11:
                    editarBebida();
                    break;
                case 12:
                    listarBebidas();
                    break;
                case 13:
                    System.out.println("Voltando ao menu principal...");
                    break;
                default:
                    System.out.println("Opção inválida, tente novamente!");
            }
        } while (opcao != 13);
    }

    public void menuClientes() {
        Scanner sc = new Scanner(System.in);
        int opcao;
        do {
            System.out.println("* MENU - CLIENTES *");
            System.out.println("14 - Cadastrar Cliente");
            System.out.println("15 - Editar Cliente");
            System.out.println("16 - Listar Clientes");
            System.out.println("17 - Voltar");
            System.out.print("Digite uma opção: ");
            opcao = sc.nextInt();
            switch (opcao) {
                case 14:
                    cadastrarCliente();
                    break;
                case 15:
                    editarCliente();
                    break;
                case 16:
                    listarClientes();
                    break;
                case 17:
                    System.out.println("Voltando ao menu principal...");
                    break;
                default:
                    System.out.println("Opção inválida, tente novamente!");
            }
        } while (opcao != 17);
    }

    public void menuPedidos() {
        Scanner sc = new Scanner(System.in);
        int opcao;
        do {
            System.out.println("* MENU - PEDIDOS *");
            System.out.println("18 - Novo Pedido");
            System.out.println("19 - Editar Pedido");
            System.out.println("20 - Listar Pedidos");
            System.out.println("21 - Voltar");
            System.out.print("Digite uma opção: ");
            opcao = sc.nextInt();
            switch (opcao) {
                case 18:
                    novoPedido();
                    break;
                case 19:
                    editarPedido();
                    break;
                case 20:
                    listarPedidos();
                    break;
                case 21:
                    System.out.println("Voltando ao menu principal...");
                    break;
                default:
                    System.out.println("Opção inválida, tente novamente!");
            }
        } while (opcao != 21);
    }

    public void novoPedido() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Novo Pedido");
        System.out.println("Digite o nome do cliente: ");
        String nomeCliente = sc.nextLine();
        Cliente cliente = buscarClientePeloNome(nomeCliente);
        if (cliente == null) {
            System.out.println("Cliente não encontrado!");
            return;
        }
        Pedido pedido = new Pedido(cliente);
        String opcao;
        do {
            System.out.println("Digite o nome do sanduíche: ");
            String nomeSanduiche = sc.nextLine();
            Sanduiche sanduiche = buscarSanduichePeloNome(nomeSanduiche);
            if (sanduiche == null) {
                System.out.println("Sanduíche não encontrado!");
            } else {
                pedido.adicionarSanduiche(sanduiche);
                System.out.println("Sanduíche adicionado ao pedido!");
            }
            System.out.println("Deseja adicionar mais algum sanduíche? (S/N)");
            opcao = sc.nextLine();
        } while (opcao.equalsIgnoreCase("S"));
        do {
            System.out.println("Digite o nome da bebida: ");
            String nomeBebida = sc.nextLine();
            Bebida bebida = buscarBebidaPeloNome(nomeBebida);
            if (bebida == null) {
                System.out.println("Bebida não encontrada!");
            } else {
                pedido.adicionarBebida(bebida);
                System.out.println("Bebida adicionada ao pedido!");
            }
            System.out.println("Deseja adicionar mais alguma bebida? (S/N)");
            opcao = sc.nextLine();
        } while (opcao.equalsIgnoreCase("S"));
        pedidos.add(pedido);
        System.out.println("Pedido cadastrado com sucesso!");
    }

    public void listarPedidos() {
        for (Pedido pedido : pedidos) {
            pedido.listarPedido();
        }
    }

    public void editarPedido() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o número do pedido que deseja editar: ");
        int numPedido = sc.nextInt();
        Pedido pedido = pedidos.get(numPedido - 1);

        System.out.println("Digite 'S' para editar um sanduíche ou 'B' para editar uma bebida: ");
        String opcao = sc.nextLine();
        if (opcao.equalsIgnoreCase("S")) {
            // Editar sanduíche
            System.out.println("Digite o nome do sanduíche que deseja editar: ");
            String nomeSanduiche = sc.nextLine();
            Sanduiche sanduiche = buscarSanduichePeloNome(nomeSanduiche);
            if (sanduiche == null) {
                System.out.println("Sanduíche não encontrado!");
                return;
            }
            System.out.println("Digite 'A' para adicionar ou 'R' para remover o sanduíche do pedido: ");
            String opcao2 = sc.nextLine();
            if (opcao2.equalsIgnoreCase("A")) {
                pedido.adicionarSanduiche(sanduiche);
                System.out.println("Sanduíche adicionado ao pedido!");
            } else if (opcao2.equalsIgnoreCase("R")) {
                pedido.removerSanduiche(sanduiche);
                System.out.println("Sanduíche removido do pedido!");
            } else {
                System.out.println("Opção inválida!");
                return;
            }
        } else if (opcao.equalsIgnoreCase("B")) {
            System.out.println("Digite o nome da bebida que deseja editar: ");
            String nomeBebida = sc.nextLine();
            Bebida bebida = buscarBebidaPeloNome(nomeBebida);
            if (bebida == null) {
                System.out.println("Bebida não encontrada!");
                return;
            }
            System.out.println("Digite 'A' para adicionar ou 'R' para remover a bebida do pedido: ");
            String opcao2 = sc.nextLine();
            if (opcao2.equalsIgnoreCase("A")) {
                pedido.adicionarBebida(bebida);
                System.out.println("Bebida adicionada ao pedido!");
            } else if (opcao2.equalsIgnoreCase("R")) {
                pedido.removerBebida(bebida);
                System.out.println("Bebida removida do pedido!");
            } else {
                System.out.println("Opção inválida!");
                return;
            }
        } else {
            System.out.println("Opção inválida!");
            return;
        }

        System.out.println("Pedido atualizado com sucesso!");
    }

    public Sanduiche buscarSanduichePeloNome(String nome) {
        for (Sanduiche s : sanduiches) {
            if (s.getNome().equals(nome)) {
                return s;
            }
        }
        System.out.println("Sanduíche não encontrado!");
        return null;
    }

    public void listarSanduiches() {
        System.out.println("* LISTA DE SANDUÍCHES *");
        for (Sanduiche s : sanduiches) {
            System.out.println("Nome: " + s.getNome());
            System.out.println("Tamanho: " + s.getTamanho());
            System.out.println("Ingredientes: " + s.getIngredientes());
            System.out.println("Valor: " + s.getValor());
            System.out.println("--------------------------");
        }
    }

    public void cadastrarSanduiche() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Cadastrando novo sanduíche...");
        System.out.print("Nome: ");
        String nome = sc.nextLine();
        System.out.print("Tamanho: ");
        String tamanho = sc.nextLine();
        System.out.print("Ingredientes: ");
        String ingredientes = sc.nextLine();
        System.out.print("Valor: ");
        double valor = sc.nextDouble();
        Sanduiche s = new Sanduiche(nome, tamanho, ingredientes, valor);
        sanduiches.add(s);
        System.out.println("Sanduíche cadastrado com sucesso!");
    }

    public void editarSanduiche() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Editando sanduíche...");
        System.out.print("Digite o nome do sanduíche que deseja editar: ");
        String nome = sc.nextLine();

        Sanduiche sanduiche = buscarSanduichePeloNome(nome);

        if (sanduiche == null) {
            System.out.println("Sanduíche não encontrado!");
            return;
        }

        System.out.println("Dados atuais do sanduíche:");
        System.out.println(sanduiche);
        System.out.println("Digite os novos dados do sanduíche:");
        System.out.print("Nome: ");
        nome = sc.nextLine();
        System.out.print("Tamanho: ");
        String tamanho = sc.nextLine();
        System.out.print("Ingredientes: ");
        String ingredientes = sc.nextLine();
        System.out.print("Valor: ");
        double valor = sc.nextDouble();

        sanduiche.setNome(nome);
        sanduiche.setTamanho(tamanho);
        sanduiche.setIngredientes(ingredientes);
        sanduiche.setValor(valor);

        System.out.println("Sanduíche atualizado com sucesso!");
    }

    public void cadastrarBebida() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Cadastrando nova bebida...");
        System.out.print("Nome: ");
        String nome = sc.nextLine();
        System.out.print("Tamanho: ");
        String tamanho = sc.nextLine();
        System.out.print("Valor: ");
        double valor = sc.nextDouble();
        Bebida b = new Bebida(nome, tamanho, valor);
        bebidas.add(b);
        System.out.println("Bebida cadastrada com sucesso!");
    }

    public Bebida buscarBebidaPeloNome(String nome) {
        for (Bebida b : bebidas) {
            if (b.getNome().equals(nome)) {
                return b;
            }
        }
        System.out.println("Bebida não encontrada!");
        return null;
    }

    public void editarBebida() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Editando bebida...");
        System.out.print("Digite o nome da bebida que deseja editar: ");
        String nome = sc.nextLine();

        Bebida bebida = buscarBebidaPeloNome(nome);

        if (bebida == null) {
            System.out.println("Bebida não encontrada!");
            return;
        }

        System.out.println("Dados atuais da bebida:");
        System.out.println(bebida);
        System.out.println("Digite os novos dados da bebida:");
        System.out.print("Nome: ");
        nome = sc.nextLine();
        System.out.print("Tamanho: ");
        String tamanho = sc.nextLine();
        System.out.print("Valor: ");
        double valor = sc.nextDouble();

        bebida.setNome(nome);
        bebida.setTamanho(tamanho);
        bebida.setValor(valor);

        System.out.println("Bebida atualizada com sucesso!");
    }

    public void listarBebidas() {
        System.out.println("* LISTA DE BEBIDAS *");
        for (Bebida b : bebidas) {
            System.out.println(b);
        }
    }

    public void cadastrarCliente() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Cadastrando novo cliente...");
        System.out.print("Nome: ");
        String nome = sc.nextLine();
        System.out.print("Telefone: ");
        String telefone = sc.nextLine();
        System.out.print("Endereço: ");
        String endereco = sc.nextLine();
        Cliente c = new Cliente(nome, telefone, endereco);
        clientes.add(c);
        System.out.println("Cliente cadastrado com sucesso!");
    }

    public Cliente buscarClientePeloNome(String nome) {
        for (Cliente c : clientes) {
            if (c.getNome().equals(nome)) {
                return c;
            }
        }
        System.out.println("Cliente não encontrado!");
        return null;
    }

    public void editarCliente() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Editando cliente...");
        System.out.print("Digite o nome do cliente que deseja editar: ");
        String nome = sc.nextLine();

        Cliente cliente = buscarClientePeloNome(nome);

        if (cliente == null) {
            System.out.println("Cliente não encontrado!");
            return;
        }

        System.out.println("Dados atuais do cliente:");
        System.out.println(cliente);
        System.out.println("Digite os novos dados do cliente:");
        System.out.print("Nome: ");
        nome = sc.nextLine();
        System.out.print("Telefone: ");
        String telefone = sc.nextLine();
        System.out.print("Endereço: ");
        String endereco = sc.nextLine();

        cliente.setNome(nome);
        cliente.setTelefone(telefone);
        cliente.setEndereco(endereco);

        System.out.println("Cliente atualizado com sucesso!");
    }

    public void listarClientes() {
        System.out.println("* LISTA DE CLIENTES *");
        if (clientes.size() == 0) {
            System.out.println("Nenhum cliente cadastrado ainda...");
        } else {
            for (Cliente c : clientes) {
                System.out.println(c);
            }
        }
    }
}
