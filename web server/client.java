import java.net.*;
import java.io.*;

public class client {
    public void run() throws UnknownHostException, IOException {
    int port = 8010;
    InetAddress address = InetAddress.getByName("localhost");
    Socket socket = new Socket(address, port);
    PrintWriter toserver = new PrintWriter(socket.getOutputStream(), true);
    BufferedReader fromserver = new BufferedReader(new InputStreamReader(socket.getInputStream()));
    toserver.println("Hello, Server!");
    String line=    fromserver.readLine();
    System.out.println("Server says: " + line);
}

    public static void main(String[] args) {
        client client = new client();
        try {
            client.run();
        } catch (Exception e) {
            System.out.println("Error running client: " + e.getMessage());
        }
    }
}
