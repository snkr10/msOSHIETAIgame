package sample;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Random;

public class Database {

	Connection conn = null;
	Statement st = null;
	ResultSet rs = null;

	ArrayList<ProductDTO> product_tbl = new ArrayList<ProductDTO>();
	static int id;

	public Database() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/msdb", "root", "");
			st = conn.createStatement();

		} catch (SQLException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODD 自動生成された catch ブロック
			e.printStackTrace();
		}
	}

	public void insertScore(int score) {
		id = loadId();
		int stage = ProductDTO.getStage();

		String sql = "insert into score (member_id,stage_id,score) values (" + id + "," + stage + "," + score + ");";
		System.out.println(sql);
		try {
			st.executeUpdate(sql);

		} catch (SQLException e) {
			System.out.print("2b");
		} finally {
			if (rs != null) {
				try {
					rs.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (st != null) {
				try {
					st.close();
				} catch (Exception e2) {
					// TODO: handle exception
				}
			}
			if (conn != null) {
				try {
					conn.close();
				} catch (Exception e2) {
					// TODO: handle exception
				}
			}

		}

	}


	public String selectMember(String num) {

		String sql = "SELECT name FROM member WHERE pass = '"+num+"' ;";
		System.out.println(sql);
		String ms=null;
		System.out.println(sql);
		try {
			st.executeUpdate(sql);

			if (rs.next()) {
				 ms = rs.getString("name");
				 System.out.println("通過１");
			}

		} catch (SQLException e) {
			System.out.print("1b");
			ms="unknown";
		} finally {

		}
		System.out.println("通過④");
		return ms;


	}


	public int insertMember(String name) {
		Random rd = new Random();
		int pw = rd.nextInt(8999) + 1001;
		int count = 1;
		count = loadPw(pw);
		while (count != 0) {
			pw = rd.nextInt(8999) + 1001;
			count = loadPw(pw);
		}

		String sql = "insert into member (name,pass) values('" + name + "'," + pw + ");";
		System.out.println(sql);
		try {
			System.out.println(sql);
			st.executeUpdate(sql);

		} catch (SQLException e) {
			System.out.print("1b");
		} finally {

		}
		return pw;

	}

	public int loadPw(int n) {
		int count = 0;

		String sql = "SELECT count(*) FROM member WHERE pass = " + n + ";";

		System.out.println(sql);
		try {
			rs = st.executeQuery(sql);
			while (rs.next()) {
				count = Integer.parseInt(rs.getString("count(*)"));
			}

		} catch (SQLException e) {
			System.out.print("bb");
		} finally {

		}
		return count;

	}

	public int loadId() {
		id = 0;

		String sql = "SELECT MAX(id) FROM member ;";

		System.out.println(sql);
		try {
			rs = st.executeQuery(sql);
			while (rs.next()) {
				id = Integer.parseInt(rs.getString("MAX(id)"));
			}

		} catch (SQLException e) {
			System.out.print("bb");
		} finally {

		}
		return id;

	}

	public ArrayList<ProductDTO> loadScore() {

		String sql = "SELECT member.name,stage.name,rank.name,score.score FROM score "
				+ "INNER JOIN member ON score.member_id = member.id " + "INNER JOIN stage ON score.stage_id = stage.id "
				+ "INNER JOIN rank ON rank.min<= score.score and score.score <= rank.max " + "WHERE score.member_id = "
				+ id;
		System.out.println(sql);
		try {
			rs = st.executeQuery(sql);

			while (rs.next()) {
				// ArrayList<String> rec = new ArrayList<String>();

				ProductDTO dto = new ProductDTO();
					dto.setMamberName(rs.getString("member.name"));
					dto.setStageName(rs.getString("stage.name"));
					dto.setRankName(rs.getString("rank.name"));
					dto.setScore(rs.getString("score.score"));


				product_tbl.add(dto);

			}

		} catch (SQLException e) {
			System.out.print("bb");
		} finally {
			if (rs != null) {
				try {
					rs.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (st != null) {
				try {
					st.close();
				} catch (Exception e2) {
					// TODO: handle exception
				}
			}
			if (conn != null) {
				try {
					conn.close();
				} catch (Exception e2) {
					// TODO: handle exception
				}
			}
		}
		return product_tbl;

	}

}
