import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.io.PrintWriter;
import java.io.BufferedReader;
import java.io.InputStreamReader;


public class server {
    
    public void run() throws IOException {
        int port = 8010; 
        ServerSocket socket= new ServerSocket(port);
        System.out.println("Server is running on port " + port);
        socket.setSoTimeout(10000);
        while (true) {
            try {
                Socket clientSocket = socket.accept();
                System.out.println("Client connected: " + clientSocket.getInetAddress());
                PrintWriter toclient = new PrintWriter(clientSocket.getOutputStream(), true);
                BufferedReader fromclient = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                String line = fromclient.readLine();
                System.out.println("Client says: " + line);

                toclient.println("Welcome to the server! Type 'exit' to disconnect.");
                
            } catch (IOException e) {
                System.out.println("Error accepting client connection: " + e.getMessage());
            }
        }
    }



    public static void main(String[] args) {
        server server = new server();
        try{
            server.run();
        } catch (Exception e) {
            System.out.println("Error starting server: " + e.getMessage());
        }
        
    }
}
