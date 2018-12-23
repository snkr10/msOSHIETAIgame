package sample;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/result")
public class result extends HttpServlet implements ServletContextListener {
	private static final long serialVersionUID = 1L;

	public result() {
		super();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		ArrayList<ProductDTO> product_tbl = new ArrayList<ProductDTO>();


		BufferedReader buffer = new BufferedReader(request.getReader());
		String reqJson = buffer.readLine();


		ObjectMapper mapper = new ObjectMapper();
		Map<String, String> reqMap = mapper.readValue(reqJson, new TypeReference<Map<String, String>>() {
		});

		Database db=new Database();

		product_tbl=db.loadScore();
		String memberName=null,rankName=null,stageName=null,score=null;
		for(ProductDTO dto : product_tbl){
			memberName=dto.getMamberName();
			rankName=dto.getRankName();
			stageName=dto.getStageName();
			score=dto.getScore();
		}



		Map<String, Object> resMap = new HashMap<>();
		resMap.put("ret", "true");
		resMap.put("mamberName", memberName);
		resMap.put("rankName", rankName);
		resMap.put("stageName", stageName);
		resMap.put("score", score);


		String resJson = mapper.writeValueAsString(resMap);

		response.setContentType("application/json");
		response.setHeader("Cache-Control", "nocache");
		response.setCharacterEncoding("utf-8");

		PrintWriter out = response.getWriter();
		out.print(resJson);
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