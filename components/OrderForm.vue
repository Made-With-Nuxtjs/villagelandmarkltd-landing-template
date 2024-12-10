<template>
    <div class="flex justify-center bg-zinc-50">
        <div class="container mx-auto md:px-48 lg:px-48 xl:px-48  py-8 px-4 sm:px-8 pt-8">
            <div class="w-full rounded-3xl border-t-[12px] border-2 border-emerald-800 shadow-lg bg-white">
                <div class="pt-6">
                    <h2
                        class="text-center px-4 text-xl md:text-4xl lg:text-4xl xl:text-4xl font-bold font-bang text-emerald-700">
                        প্রজেক্ট ভিজিট করতে আপনার সঠিক তথ্য দিয়ে নিচের ফর্মটি সম্পূর্ণ পূরন করুন।
                    </h2>

                    <div class="px-6">
                        <h2 class="text-xl font-bold my-6">
                            Your Products
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <!-- Product 1 -->
                            <div class="flex items-center border rounded-lg p-2 md:p-4 lg:p-4 xl:p-4 bg-gray-100">
                                <input class="mr-2 xl:mr-4 size-5" name="product" type="radio" />
                                <NuxtImg src="https://placehold.co/64" title="product-image" class="w-20 mr-4"
                                    alt="product-image" />
                                <div class="flex-1">
                                    <p class="text-sm md:text-md lg:text-lg xl:text-lg font-bold mb-2">
                                        মাঝারি সাইজের ফ্লাট
                                    </p>
                                    <div class="flex justify-center items-center">
                                        <button class="border px-2 py-1">
                                            -
                                        </button>
                                        <input class="w-12 text-center border-t border-b py-1" type="text" value="1" />
                                        <button class="border px-2 py-1">
                                            +
                                        </button>
                                        <p class="pl-2">
                                            ৳ 0.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Product 2 -->
                            <div class="flex items-center border rounded-lg p-2 md:p-4 lg:p-4 xl:p-4 bg-gray-100">
                                <input class="mr-2 xl:mr-4 size-5" name="product" type="radio" />
                                <NuxtImg src="https://placehold.co/64" title="product-image" class="w-20 mr-4"
                                    alt="product-image" />
                                <div class="flex-1">
                                    <h3 class="text-sm md:text-md lg:text-lg xl:text-lg font-bold mb-2">
                                        বড় সাইজের ফ্লাট
                                    </h3>
                                    <div class="flex items-center">
                                        <button class="border px-2 py-1">
                                            -
                                        </button>
                                        <input class="w-12 text-center border-t border-b py-1" type="text" value="2" />
                                        <button class="border px-2 py-1">
                                            +
                                        </button>
                                        <span class="ml-4 line-through hidden xl:flex">
                                            ৳ 0.00
                                        </span>
                                        <span class="ml-2">
                                            ৳ 0.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row p-6 gap-8">
                        <!-- Billing Details -->
                        <div class="w-full lg:w-1/2 xl:w-1/2">
                            <h5 class="text-md md:text-md text-gray-700 font-bold mb-4">Billing details</h5>
                            <form>
                                <!-- Name Field -->
                                <div class="mb-4">
                                    <label :class="[
                                        'block text-xs font-bold mb-2 transition-colors duration-300',
                                        labelErrors.name ? 'text-red-500' : 'text-gray-800'
                                    ]" for="name">
                                        আপনার নাম <span class="text-red-500">*</span>
                                    </label>
                                    <input v-model="formData.name" @focus="focusField('name')"
                                        @blur="validateField('name')"
                                        :placeholder="focusedField === 'name' ? '' : 'আপনার সম্পূর্ণ নাম লিখুন'"
                                        :class="errors.name || labelErrors.name ? 'border-red-400' : 'border-emerald-800'"
                                        class="border-2 rounded-xl border-t-8 py-3 w-full text-gray-800 leading-tight placeholder:text-xs placeholder:text-gray-700 placeholder:px-4 focus:outline-none transition-all duration-700"
                                        id="name" type="text" />
                                    <p v-if="errors.name" class="text-xs text-red-500 mt-1">{{ errors.name }}</p>
                                </div>

                                <!-- Address Field -->
                                <div class="mb-4">
                                    <label :class="[
                                        'block text-xs font-bold mb-2 transition-colors duration-300',
                                        labelErrors.address ? 'text-red-500' : 'text-gray-800'
                                    ]" for="address">
                                        আপনার সম্পূর্ণ ঠিকানা<span class="text-red-500">*</span>
                                    </label>
                                    <input v-model="formData.address" @focus="focusField('address')"
                                        @blur="validateField('address')"
                                        :placeholder="focusedField === 'address' ? '' : 'হোল্ডিং নাম্বার/রোড নাম্বার/এলাকা/থানা/জেলা'"
                                        :class="errors.address || labelErrors.address ? 'border-red-400' : 'border-emerald-800'"
                                        class="border-2 rounded-xl border-t-8 py-3 w-full text-gray-800 leading-tight placeholder:text-xs placeholder:text-gray-700 placeholder:px-4 focus:outline-none transition-all duration-300"
                                        id="address" type="text" />
                                    <p v-if="errors.address" class="text-xs text-red-500 mt-1">{{ errors.address }}</p>
                                </div>

                                <!-- Mobile Field -->
                                <div class="mb-4">
                                    <label :class="[
                                        'block text-xs font-bold mb-2 transition-colors duration-300',
                                        labelErrors.mobile ? 'text-red-500' : 'text-gray-800'
                                    ]" for="mobile">
                                        আপনার ফোন নাম্বার<span class="text-red-500">*</span>
                                    </label>
                                    <input v-model="formData.mobile" @focus="focusField('mobile')"
                                        @blur="validateField('mobile')"
                                        :placeholder="focusedField === 'mobile' ? '' : 'আপনার ১১ সংখ্যার নাম্বার লিখুন'"
                                        :class="errors.mobile || labelErrors.mobile ? 'border-red-400' : 'border-emerald-800'"
                                        class="border-2 rounded-xl border-t-8 py-3 w-full text-gray-800 leading-tight placeholder:text-xs placeholder:text-gray-700 placeholder:px-4 focus:outline-none transition-all duration-300"
                                        id="mobile" type="text" />
                                    <p v-if="errors.mobile" class="text-xs text-red-500 mt-1">{{ errors.mobile }}</p>
                                </div>
                                <div>
                                    <h4 class="text-xl font-bold font-custom py-4">Additional information</h4>
                                    <!-- notes  Field -->
                                    <div class="mb-4">
                                        <label
                                            class="block text-sm font-bold  font-custom mb-2 transition-colors duration-300 text-gray-800"
                                            for="notes ">
                                            Order notes (optional)
                                        </label>
                                        <textarea id="message" rows="2"
                                            class="p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-xl border-t-8 border-2 border-emerald-800"
                                            placeholder="Notes about your order, e.g. special notes for delive"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!-- Order Summary -->
                        <div class="w-full lg:w-1/2 xl:w-1/2 pr-0 md:px-4 lg:px-4 xl:px-4">
                            <h5 class="text-md md:text-md text-gray-700 font-bold mb-4">Your order</h5>
                            <div class="mb-6">
                                <div class="grid grid-cols-1 gap-2 divide-y divide-dashed divide-gray-400">
                                    <div>
                                        <div class="flex justify-between text-sm font-semibold">
                                            <p>Product</p>
                                            <p>Subtotal</p>
                                        </div>
                                    </div>
                                    <div class="pt-2 font-semibold text-gray-600">
                                        <div class="flex justify-between items-center text-sm">
                                            <div class="flex items-center gap-2">
                                                <NuxtImg src="https://placehold.co/32" title="product-image"
                                                    class="w-14 rounded-md" alt="product-image" />
                                                <p>মাঝারি সাইজের ফ্লাট</p>
                                            </div>
                                            <p>
                                                <span class="pr-2">&times;&nbsp;1</span> 250.00৳&nbsp;
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex justify-between text-sm py-2">
                                            <p>Subtotal</p>
                                            <p>250.00৳</p>
                                        </div>
                                        <div class="flex justify-between text-sm py-1">
                                            <p>bKash Charge</p>
                                            <p>0.00৳</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex justify-between text-sm font-semibold py-2">
                                            <p>Total</p>
                                            <p>250.00৳</p>
                                        </div>
                                    </div>
                                </div>

                                <a href="/success"
                                    class="w-full h-14 flex justify-center items-center gap-2 py-2 rounded-sm bg-emerald-900 mt-4">
                                    <div>
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fas-lock h-4 w-4 text-white"
                                            fill="currentColor" viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M400 224h-24v-72C376 68.92 307.08 0 224 0S72 68.92 72 152v72H48c-26.51 0-48 21.49-48 48v192c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V272c0-26.51-21.49-48-48-48zM144 152c0-44.18 35.82-80 80-80s80 35.82 80 80v72H144v-72zm96 200c0 13.25-10.75 24-24 24s-24-10.75-24-24v-48c0-13.25 10.75-24 24-24s24 10.75 24 24v48z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="text-sm text-white font-semibold">অর্ডার করুন 250.00 ৳&nbsp;</p>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { reactive, ref } from 'vue';

// Form data reactive object
const formData = reactive({
    name: '',
    address: '',
    mobile: '',
    email: '',
});

// Error messages reactive object for field errors
const errors = reactive({
    name: null,
    address: null,
    mobile: null,
    email: null,
});

// Reactive object to handle label color errors
const labelErrors = reactive({
    name: false,
    address: false,
    mobile: false,
    email: false,
});

// Track the focused field for placeholder logic
const focusedField = ref('');

// Function to focus on an input field
const focusField = (field) => {
    focusedField.value = field;
};

// Function to validate each field
const validateField = (field) => {
    const value = formData[field].trim();

    // Reset errors initially
    errors[field] = null;
    labelErrors[field] = false;

    // Check if the field is empty
    if (!value) {
        errors[field] = `${field === 'name' ? 'আপনার  নাম' : field === 'mobile' ? 'আপনার ফোন নাম্বার' : 'আপনার সম্পূর্ণ ঠিকানা'} is required`;
    }

    // Perform format validation if the field is not empty
    else {
        if (field === 'name' && !/^[a-zA-Z\s]+$/.test(value)) {
            labelErrors[field] = true;
        } else if (field === 'address' && !/^[a-zA-Z\s0-9.,-]+$/.test(value)) {
            labelErrors[field] = true;
        }
        else if (field === 'mobile' && !/^\d{11}$/.test(value)) {
            labelErrors[field] = true;
        } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            labelErrors[field] = true;
        }
    }
};
</script>
