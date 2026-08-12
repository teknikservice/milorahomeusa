$footer = @"
  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-col" style="display: flex; align-items: center;">
        <img src="images/logo.png" alt="Milora Home" style="height: 70px;">
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <a href="products.html">Collection</a>
        <a href="about.html">About Us</a>
        <a href="fairs.html">Trade Shows</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 Milora Home Exclusive.
    </div>
  </footer>
"@

Get-ChildItem -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace '(?s)<!-- Footer -->.*?</footer>', $footer
    Set-Content $_.FullName $content
}
