// bfhl.js
exports.handler = async function(event, context) {
    // Constants for the response
    const user_id = "vaibhavrajput-11012002";
    const email = "vaibhavrajput.2020@vitbhopal.ac.in";
    const roll_number = "20BAI10040";

    if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: JSON.stringify({
                "operation_code": 1
            })
        };
    }

    if (event.httpMethod === 'POST') {
        const data = JSON.parse(event.body).data;
        
        // Separate numbers and alphabets
        const numbers = data.filter(item => /^\d+$/.test(item));
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

        // Find the "highest" alphabet
        let highest_alphabet = [];
        if (alphabets.length > 0) {
            highest_alphabet.push(alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0]);
        }

        const response = {
            "is_success": true,
            "user_id": user_id,
            "email": email,
            "roll_number": roll_number,
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_alphabet": highest_alphabet
        };

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    }

    // Handle method not allowed
    return {
        statusCode: 405,
        body: 'Method Not Allowed'
    };
};
