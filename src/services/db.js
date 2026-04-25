'use strict';

import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase (Add your Firebase config)
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
    databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_PROJECT_ID.appspot.com',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

// Customer functions
export const createCustomer = async (customer) => {
    const customerRef = db.ref('customers');
    const newCustomerRef = customerRef.push();
    await newCustomerRef.set(customer);
    return newCustomerRef.key;
};

export const getCustomer = async (customerId) => {
    const customerRef = db.ref('customers/' + customerId);
    const snapshot = await customerRef.once('value');
    return snapshot.val();
};

export const updateCustomer = async (customerId, customer) => {
    const customerRef = db.ref('customers/' + customerId);
    await customerRef.update(customer);
};

export const deleteCustomer = async (customerId) => {
    const customerRef = db.ref('customers/' + customerId);
    await customerRef.remove();
};

// Transaction functions
export const createTransaction = async (transaction) => {
    const transactionRef = db.ref('transactions');
    const newTransactionRef = transactionRef.push();
    await newTransactionRef.set(transaction);
    return newTransactionRef.key;
};

export const getTransaction = async (transactionId) => {
    const transactionRef = db.ref('transactions/' + transactionId);
    const snapshot = await transactionRef.once('value');
    return snapshot.val();
};

export const updateTransaction = async (transactionId, transaction) => {
    const transactionRef = db.ref('transactions/' + transactionId);
    await transactionRef.update(transaction);
};

export const deleteTransaction = async (transactionId) => {
    const transactionRef = db.ref('transactions/' + transactionId);
    await transactionRef.remove();
};
