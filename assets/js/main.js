// فلترة الفعاليات
document.getElementById("search") ?.addEventListener("keyup", function() {
    let value = this.value.toLowerCase();
    document.querySelectorAll(".event").forEach(el => {
        el.style.display = el.textContent.toLowerCase().includes(value) ? "block" : "none";
    });
});

// تحقق من النموذج
function validateForm() {
    let email = document.getElementById("email").value;

    if (!email.includes("@")) {
        document.getElementById("msg").innerHTML =
            "<div class='alert alert-danger'>بريد غير صالح</div>";
        return false;
    }

    document.getElementById("msg").innerHTML =
        "<div class='alert alert-success'>تم الإرسال بنجاح</div>";

    return false;
}