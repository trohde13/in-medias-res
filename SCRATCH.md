

ex. moment date format change (doesn't work for mapping):
{moment("{media.date}").format("MMMM Do YYYY")}{""}



working out mapping second array
// 'media' is array of all media entries
// 'dateArrayIds' is array_agg of id's corresponding to that day
const mediaToDisplay = media.map((entry) => {
  if (dateArrayIds.indexOf(entry.id) > -1) {
    return entry;
  }
});
// then .map through 'mediaToDisplay' in the JSX