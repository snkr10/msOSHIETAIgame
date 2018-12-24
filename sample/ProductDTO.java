package sample;

public class ProductDTO {
	static String name;
	static int stage;
	private String mamberName,stageName,rankName;
	private String score;
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

	public String getScore() {
		return score;
	}
	public void setScore(String score) {
		this.score = score;
		System.out.println("スコア"+score);
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
