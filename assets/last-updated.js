// Track committed homepage edits on the site's publishing branch.
async function showLastUpdated() {
  const label = document.getElementById("last-updated");
  if (!label) return;

  try {
    const response = await fetch(
      "https://api.github.com/repos/jeremyiwk/jeremyiwk.github.io/commits?sha=main&path=index.html&per_page=1",
      { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!response.ok) return;

    const commits = await response.json();
    const timestamp = commits[0]?.commit?.committer?.date;
    if (!timestamp) return;

    const date = new Date(timestamp);
    if (Number.isNaN(date.getTime())) return;

    const time = label.querySelector("time");
    time.dateTime = date.toISOString();
    time.textContent = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "America/Los_Angeles",
    }).format(date);
    label.hidden = false;
  } catch {
    // Leave the date hidden when offline or when GitHub cannot be reached.
  }
}

showLastUpdated();
