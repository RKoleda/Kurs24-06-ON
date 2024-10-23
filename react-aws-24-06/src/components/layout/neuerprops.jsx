function CustomTextField({ placeholder, value, onChange }) {
    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </div>
    );
  }
  
  export default CustomTextField;