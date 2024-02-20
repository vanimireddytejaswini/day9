document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.getElementById('eventForm');
    const eventNameInput = document.getElementById('eventName');
    const eventDateInput = document.getElementById('eventDate');
    const eventList = document.getElementById('eventList');

    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const eventName = eventNameInput.value;
        const eventDate = eventDateInput.value;

        if(eventName && eventDate) {
            addEvent(eventName, eventDate);
            eventNameInput.value = '';
            eventDateInput.value = '';
        } else {
            alert('Please fill in all fields');
        }
    });

    function addEvent(name, date) {
        const li = document.createElement('li');
        li.innerHTML = <strong>${name}</strong> - ${date};
        eventList.appendChild(li);
    }
});