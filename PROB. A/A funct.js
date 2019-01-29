//body>
	<input type="number" id="num1" />
	<select id="operators">
		<option value="add">+</option>
		<option value="sub">-</option>
		<option value="mul">*</option>
		<option value="div">/</option>
		<option value="modulo">/</option>
		<option value="exponent">/</option>



	</select>
	<input type="number" id="num2" />
	<button onclick=solve()>solve</button>

	<script>
		function solve() {
			var e = document.getElementById("operators");
			var value = e.options[e.selectedIndex].value;

			num1 = parseFloat (document.getElementById)('num1').value;
			num2 = parseFloat (document.getElementById)('num2').value;

			if(value == 'add') {
				alert("answer"+ (num1 + num2) )
			if(value == 'sub') {
				alert("answer"+ (num1 - num2) )
			if(value == 'mul') {
				alert("answer"+ (num1 * num2) )
			if(value == 'div') {
				alert("answer"+ (num1 / num2) )
			if(value == 'modulo') {
				alert("answer"+ (num1 % num2) )
			if(value == 'exponent') {
				alert("answer"+ (num1 ^ num2) )
			if(value == 'div') {
				alert("answer"+ (num1 / num2) )
		}
	</script>
</body>
</html>

