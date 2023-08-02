<template>
    <button :class="containerClasses" class="btn" type="button">
        {{ Btntext }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        Btntext: {
            type: String
        },
        BlackBtn: {
            type: Boolean,
            default: false
        },
        OutlineBtn: {
            type: Boolean,
            default: false
        },
        OutlineBtn: {
            type: Boolean,
            default: false
        },
        LefticonBtn: {
            type: Boolean,
            default: false
        },
        RighticonBtn: {
            type: Boolean,
            default: false
        },

    },
    computed: {
        containerClasses() {
            return {
                'black-btn': this.BlackBtn,
                'outline-btn': this.OutlineBtn,
                'left-icon': this.LefticonBtn,
                'right-icon': this.RighticonBtn,
            }
        }
    }
}
</script>

<style scoped>
.btn {
    padding: 8px 20px;
    font-size: .8rem;
    letter-spacing: .8px;
    border-radius: 6px;
    transition: background .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #7D8FA9;
}

.black-btn {
    border: 1px solid #1D1F1F;
    font-size: 18px;
    color: #fff;
    width: 140px;
    background: #1D1F1F;
    box-shadow: 0px 3px 8px rgba(110, 110, 110, 0.15);
}

.black-btn:hover {
    background-color: transparent;
    color: #1D1F1F;
    border-color: #1D1F1F;
    font-weight: 600;
}

.outline-btn {
    background-color: transparent;
    color: #7D8FA9;
    border: 1px solid #7D8FA9;
    width: 140px;
}

.outline-btn:hover {
    background-color: #1D1F1F;
    color: #fff;
}

.left-icon {
    border: 1px solid #1D1F1F;
    color: #fff;
    width: 140px;
    background: #1D1F1F;
    box-shadow: 0px 3px 8px rgba(110, 110, 110, 0.15);
}

.right-icon::after {
    content: "\F138";

    font-family: 'bootstrap-icons';
    margin-left: 10px;
}

.left-icon::before {
    content: "\F284";

    font-family: 'bootstrap-icons';

    margin-right: 10px;
}
</style>
  



