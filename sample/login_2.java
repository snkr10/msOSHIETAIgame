package sample;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/login_2")
public class login_2 extends HttpServlet implements ServletContextListener {
	private static final long serialVersionUID = 1L;

	public login_2() {
		super();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		BufferedReader buffer = new BufferedReader(request.getReader());
		String reqJson = buffer.readLine();

		ObjectMapper mapper = new ObjectMapper();
		Map<String, String> reqMap = mapper.readValue(reqJson, new TypeReference<Map<String, String>>() {
		});




		Database db=new Database();

		String ms=null;
		String page=null;
		String num=reqMap.get("str1");
		String name=db.selectMember(num);
		System.out.println("取り出された名前"+name);
		if(num.equals("unknown")){
			ms="登録されていません";
			Map<String, Object> resMap = new HashMap<>();
			resMap.put("ret", "true");
			resMap.put("memberName", ms);



			String resJson = mapper.writeValueAsString(resMap);

			response.setContentType("application/json");
			response.setHeader("Cache-Control", "nocache");
			response.setCharacterEncoding("utf-8");

			PrintWriter out = response.getWriter();
			out.print(resJson);
		}
		else{

			request.setAttribute("name", name);
			RequestDispatcher rd = request.getRequestDispatcher("/login_2.jsp");
			rd.forward(request, response);
		}


		}

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		System.out.println("contextDestroyed");
	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		System.out.println("contextInitialized");
	}

}
