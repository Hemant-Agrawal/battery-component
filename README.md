# Battery Component

The `battery-component` is a custom web component that displays a battery icon along with battery-related information. This component is designed to visualize and present battery details with the help of customizable attributes.

## Usage

To use the `battery-component` in your HTML document, follow these steps:

1. Include the component script in your HTML file:

   ```html
   <script src="path-to-battery-component.js"></script>
   ```

2. Place the `battery-component` in your HTML:

   ```html
   <battery-component
     hasBattery="true"
     cycleCount="0"
     isCharging="false"
     designedCapacity="66600"
     maxCapacity="46453"
     currentCapacity="30068"
     voltage="12.218"
     capacityUnit="mWh"
     percent="64"
     timeRemaining="null"
     acConnected="false"
     type="Unknown"
     model="ABC"
     manufacturer="XYZ"
     serial="SDF"
   ></battery-component>
   ```

## Available Attributes

The `battery-component` accepts the following attributes to customize its appearance and display battery information:

- `hasBattery` (boolean): Indicates whether there is a battery (true/false).
- `cycleCount` (number): The battery cycle count.
- `isCharging` (boolean): Indicates if the battery is charging (true/false).
- `designedCapacity` (number): Designed battery capacity.
- `maxCapacity` (number): Maximum battery capacity.
- `currentCapacity` (number): Current battery capacity.
- `voltage` (number): Battery voltage.
- `capacityUnit` (string): Unit for capacity (e.g., "mWh").
- `percent` (number): Battery percentage.
- `timeRemaining` (string/number): Estimated time remaining (null for unknown).
- `acConnected` (boolean): Indicates if the AC adapter is connected (true/false).
- `type` (string): Battery type (e.g., "Unknown").
- `model` (string): Battery model information.
- `manufacturer` (string): Battery manufacturer information.
- `serial` (string): Battery serial number.

## Example

Here's an example of how to use the `battery-component`:

```html
<battery-component
  hasBattery="true"
  cycleCount="0"
  isCharging="false"
  designedCapacity="66600"
  maxCapacity="46453"
  currentCapacity="30068"
  voltage="12.218"
  capacityUnit="mWh"
  percent="64"
  timeRemaining="null"
  acConnected="false"
  type="Unknown"
  model="DELL 6HY5983S"
  manufacturer="SANYO"
  serial="08EF"
></battery-component>
```
## About the Author

👋 **Hemant Agrawal**
### Get in Touch

- **GitHub**: [Hemant-Agrawal](https://github.com/Hemant-Agrawal)
- **LinkedIn**: [Connect on LinkedIn](https://www.linkedin.com/in/hemant-ag)
- **Website**: [https://hemant-agrawal.github.io/](https://hemant-agrawal.github.io/)
- **Email**: [ha.hemantagrawal@gmail.com]

Feel free to reach out for collaboration, tech discussions, or just to say hello.