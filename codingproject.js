 function showDetails(id) {
      const allDetails = document.querySelectorAll('.project-details');

      allDetails.forEach(detail => {
        if (detail.id !== id) {
          detail.style.display = 'none';
        }
      });

      const selectedProject = document.getElementById(id);
      if (selectedProject.style.display === 'block') {
        selectedProject.style.display = 'none';
      } else {
        selectedProject.style.display = 'block';
      }
    }