function ClozeCard(text, cloze) {
	if (text.includes(cloze)) {
		if (this instanceof ClozeCard) {
			this.cloze = cloze;
			this.fullText = text; 
			this.partial =  text.replace(cloze, "________");
		}
		else {
			return new ClozeCard(text, cloze);
		}
	}
	else {
		console.log("Error: '" + text + "' does not contain '" + cloze + "'.");
	}
};

module.exports = ClozeCard;
