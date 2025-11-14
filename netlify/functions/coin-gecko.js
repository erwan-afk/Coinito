/**
 * Netlify Function to proxy CoinGecko API calls
 * This keeps the API key server-side and prevents it from being exposed in the client bundle
 */
exports.handler = async function (event, context) {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Get the API key from environment variables (server-side only)
    const apiKey = process.env.COINGECKO_API_KEY || '';
    const baseURL = 'https://api.coingecko.com/api/v3';
    
    // Extract endpoint from the request path
    // Netlify Functions: event.path can be the full path or relative to function
    // Handle both cases: /.netlify/functions/coin-gecko/endpoint or /endpoint
    let endpoint = event.path;
    if (endpoint.includes('/.netlify/functions/coin-gecko')) {
      endpoint = endpoint.replace('/.netlify/functions/coin-gecko', '');
    } else if (endpoint.startsWith('/coin-gecko')) {
      endpoint = endpoint.replace('/coin-gecko', '');
    }
    
    // Ensure endpoint starts with /
    if (!endpoint.startsWith('/')) {
      endpoint = '/' + endpoint;
    }
    if (endpoint === '/') {
      endpoint = '';
    }
    
    const queryParams = event.queryStringParameters || {};
    
    // Build the URL with all query parameters including the API key
    const url = new URL(`${baseURL}${endpoint}`);
    
    // Add the API key if it exists
    if (apiKey) {
      url.searchParams.append('x_cg_demo_api_key', apiKey);
    }
    
    // Add all other query parameters
    Object.keys(queryParams).forEach(key => {
      url.searchParams.append(key, queryParams[key]);
    });

    // Make the request to CoinGecko API
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });

    // Check if the response is ok
    if (!response.ok) {
      const errorText = await response.text();
      return {
        statusCode: response.status,
        body: JSON.stringify({ 
          error: `CoinGecko API error: ${response.status}`,
          details: errorText
        })
      };
    }

    // Parse and return the response
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error in coin-gecko function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};
