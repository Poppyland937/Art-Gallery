function showRSVPForm() {
  const rsvpSection = document.getElementById("rsvp-form");
  if (rsvpSection) {
    rsvpSection.classList.toggle("hidden");
    console.log("RSVP form toggled.");
  } else {
    console.error("RSVP form not found!");
  }
}
