function formatDuration (total_seconds) {
    const days_per_year = 365;
    const days_per_month = 30;
    const seconds_per_minute = 60;
    const minutes_per_hour = 60;
    const hours_per_day = 24;

    
    let year = 0
    let month = 0;
    let day = 0;
    let hour = 0;
    let minute = 0;
    let second = 0;

    console.log(days_per_year * hours_per_day * minutes_per_hour * seconds_per_minute)
    if(total_seconds > days_per_year * hours_per_day * minutes_per_hour * seconds_per_minute) {
         year = Math.floor(total_seconds/(days_per_year * hours_per_day * minutes_per_hour * seconds_per_minute));
    }


    console.log(years)

}




formatDuration(31536000)
  

// total_seconds = input number of seconds

// Compute years
// years = floor(total_seconds / (DAYS_PER_YEAR * HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE))

// Compute remaining seconds after extracting years
// remaining_seconds_after_years = total_seconds % (DAYS_PER_YEAR * HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE)

// Compute months
// months = floor(remaining_seconds_after_years / (DAYS_PER_MONTH * HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE))

// Compute remaining seconds after extracting months
// remaining_seconds_after_months = remaining_seconds_after_years % (DAYS_PER_MONTH * HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE)

// Compute days
// days = floor(remaining_seconds_after_months / (HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE))

// Compute remaining seconds after extracting days
// remaining_seconds_after_days = remaining_seconds_after_months % (HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE)

// Compute hours
// hours = floor(remaining_seconds_after_days / (MINUTES_PER_HOUR * SECONDS_PER_MINUTE))

// Remaining seconds are the seconds left after extracting all higher units
// remaining_seconds = remaining_seconds_after_days % (MINUTES_PER_HOUR * SECONDS_PER_MINUTE)
