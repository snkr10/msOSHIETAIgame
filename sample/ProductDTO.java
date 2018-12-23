package sample;

public class ProductDTO {
	static String name;
	static int stage;
	private String mamberName,stageName,rankName;
	private int score;
	public String getMamberName() {
		return mamberName;
	}
	public void setMamberName(String mamberName) {
		this.mamberName = mamberName;
	}
	public String getStageName() {
		return stageName;
	}
	public void setStageName(String stageName) {
		this.stageName = stageName;
	}
	public String getRankName() {
		return rankName;
	}
	public void setRankName(String rankName) {
		this.rankName = rankName;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public static String getName() {
		return name;
	}
	public static void setName(String name) {
		ProductDTO.name = name;
	}
	public static int getStage() {
		return stage;
	}
	public static void setStage(int stage) {
		ProductDTO.stage = stage;
	}





}
