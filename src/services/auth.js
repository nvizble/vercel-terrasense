/**
 * Signup service to register a new user
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise} - Response from the signup endpoint
 */
export const signupFetch = async (name, email, password) => {
  try {
    const response = await fetch('https://terrasense-api.onrender.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Signup failed');
    }
    
    return data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

/**
 * Login service to authenticate a user
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise} - Response from the login endpoint
 */
export const loginFetch = async (email, password) => {
  try {
    const response = await fetch('https://terrasense-api.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
