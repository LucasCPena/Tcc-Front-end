import { axios } from "axios";

const authenticateUser = async (usuario, senha) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/user`, {
      email: usuario,
      password: senha,
    });

    const token = response.data.token;

    if (token) {
      alert("Login bem-sucedido!");
      // Rediciona para a pagina main
      window.location.href = "Main.html";
    }

    return token;
  } catch (err) {
    console.error("Erro de autenticação:", error);
    throw error;
  }
};

export default authenticateUser;
