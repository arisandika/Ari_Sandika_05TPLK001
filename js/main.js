// Sidebar Toggle
$("#sidebarToggle").on("click", function () {
  $("#sidebar").toggleClass("collapsed");
  $("#main").toggleClass("expanded");
});

// Responsive Sidebar
function checkWidth() {
  if ($(window).width() <= 768) {
    $("#sidebar").addClass("collapsed");
    $("#main").addClass("expanded");
  } else {
    $("#sidebar").removeClass("collapsed");
    $("#main").removeClass("expanded");
  }
}

checkWidth();

$(window).on("resize", checkWidth);

// Karyawan Table
if (document.getElementById("employeeTable")) {
  $(document).ready(function () {
    // Initialize DataTable
    $("#employeeTable").DataTable({
      language: {
        search: "Search:",
        lengthMenu: "Show _MENU_ entries",
        info: "Showing _START_ to _END_ of _TOTAL_ entries",
        paginate: {
          first: "First",
          last: "Last",
          next: "Next",
          previous: "Previous",
        },
      },
      columnDefs: [{ orderable: false, targets: 6 }],
      order: [[0, "asc"]],
      pageLength: 10,
      responsive: true,
    });

    $("[title]").each(function () {
      new bootstrap.Tooltip(this);
    });
  });
}

if (document.getElementById("jabatanTable")) {
  $(document).ready(function () {
    // Initialize DataTable
    $("#jabatanTable").DataTable({
      language: {
        search: "Search:",
        lengthMenu: "Show _MENU_ entries",
        info: "Showing _START_ to _END_ of _TOTAL_ entries",
        paginate: {
          first: "First",
          last: "Last",
          next: "Next",
          previous: "Previous",
        },
      },
      columnDefs: [{ orderable: false, targets: 3 }],
      order: [[0, "asc"]],
      pageLength: 10,
      responsive: true,
    });

    $("[title]").each(function () {
      new bootstrap.Tooltip(this);
    });
  });
}
