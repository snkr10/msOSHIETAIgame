package sample;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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

@WebServlet("/Production")
public class Production extends HttpServlet implements ServletContextListener {
	private static final long serialVersionUID = 1L;

	public Production() {
		super();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		BufferedReader buffer = new BufferedReader(request.getReader());
		String reqJson = buffer.readLine();

		ObjectMapper mapper = new ObjectMapper();
		Map<String, String> reqMap = mapper.readValue(reqJson, new TypeReference<Map<String, String>>() {
		});

		int score = 0;
		String judge;
		ArrayList<ProductDTO> product_tbl = new ArrayList<ProductDTO>();

		if (reqMap.get("judge").equals("true")) {
			score = Integer.parseInt(reqMap.get("score"));
			System.out.println("トータルスコア" + score);
			Database db=new Database();
			db.insertScore(score);
			product_tbl=db.loadScore();

			for(ProductDTO dto : product_tbl){
				System.out.println(dto.getMamberName());
				System.out.println(dto.getRankName());
				System.out.println(dto.getStageName());
				System.out.println(dto.getScore());
			}

			RequestDispatcher disp;

			System.out.println("bb");

		} else {
			System.out.println(reqMap.get("str1"));

			List<String> list = new ArrayList<>();
			list.add(reqMap.get("str1"));

			Map<String, Object> resMap = new HashMap<>();

			resMap.put("ret", "true");
			resMap.put("ary", list);

			String resJson = mapper.writeValueAsString(resMap);

			response.setContentType("application/json");
			response.setHeader("Cache-Control", "nocache");
			response.setCharacterEncoding("utf-8");

			PrintWriter out = response.getWriter();
			out.print(resJson);
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
