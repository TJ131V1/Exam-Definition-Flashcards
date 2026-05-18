
"use strict";

// Main script (top-level functions and state). Initialize via `init()` on DOMContentLoaded.
    // ========== FULL OCR PHYSICS GLOSSARY (from PDF pages 1-13) ==========
    const physicsRaw = `
    absolute scale of temperature; A scale for measuring temperature based on absolute zero and the triple point of pure water, with gradations equal in size to those of the Celsius scale; unit kelvin (K)
    absolute zero; The lowest possible temperature, the temperature at which substances have minimum internal energy
    absorption coefficient; A measure of the absorption of X-ray photons by a substance, also known as attenuation coefficient - SI unit m⁻¹
    absorption line spectrum; A set of specific frequencies of electromagnetic radiation, visible as dark lines in an otherwise continuous spectrum on spectroscopy. They are absorbed by atoms as their electrons are excited between energy states by absorbing the corresponding amount of energy in the form of photons - every element has a characteristic line spectrum
    acceleration; The rate of change of velocity, a vector quantity
    acceleration of free fall; The rate of change of velocity of an object falling in a gravitational field, symbol g
    acoustic impedance; The product of the density ρ of a substance and the speed c of ultrasound in that substance - symbol Z SI unit kg m⁻² s⁻¹
    acoustic matching (or impedance matching); The use of two substances with similar acoustic impedance to minimise reflection of ultrasound at the boundary between them
    activity; The rate at which nuclei decay or disintegrate in a radioactive source, measured in becquerels (Bq) or decays per second
    alpha radiation; Ionising radiation consisting of particles comprising two protons and two neutrons (a helium nucleus), with a charge of +2e
    air resistance; The drag or resistive force experienced by objects moving through air
    ammeter; A device used to measure electric current - it must be placed in series and ideally have zero resistance
    amount of substance; A measure of the amount of matter in moles
    ampere; The base SI unit of electric current, symbol A, defined as the current flowing in two parallel wires in a vacuum 1 m apart such that there is an attractive force of 2.0×10⁻⁷ N per metre length of wire between them
    amplitude (waves); The maximum displacement from the equilibrium position (can be positive or negative)
    angle of incidence; The angle between the direction of travel of an incident wave and the normal at a boundary between two media
    angle of reflection; The angle between the direction of travel of a reflected wave and the normal at a boundary between two media
    angular frequency; A quantity used in oscillatory motion - equal to the product of frequency f and 2π
    angular velocity; The rate of change of angle for an object moving in a circular path - symbol ω
    anion; A negatively charged ion, one which is attracted to an anode
    annihilation; The complete destruction of a particle and its antiparticle in an interaction that releases energy in the form of identical photons
    anode; A positively charged electrode
    antiparallel (vectors); In the same line but opposite directions
    antiparticle; The antimatter counterpart of a particle, with the opposite charge to the particle (if the particle has charge) and exactly the same rest mass as the particle
    antiphase; Particles oscillating completely out of step with each other (one reaches its maximum positive displacement as the other reaches its maximum negative displacement) are in antiphase
    aphelion; The furthest point from the Sun in an orbit
    Archimedes' principle; The upthrust on an object in a fluid is equal to the weight of fluid it displaces
    arcminute; A minute of arc; 1° = 60 arcminutes
    arcsecond; A second of arc; 1 arcminute = 60 arcseconds
    astronomical unit; The mean distance from the Earth to the Sun, i.e. 150 million km or 1.50×10¹¹ m
    atomic mass unit; One atomic mass unit (1 u) is one-twelfth the mass of a neutral carbon-12 atom
    atomic number; The number of protons in a nucleus - symbol Z
    attenuation; The decrease in the intensity of electromagnetic radiation as it passes through matter and/or space
    attenuation coefficient; A measure of the absorption of X-ray photons by a substance, also known as absorption coefficient - SI unit m⁻¹
    average speed; The rate of change in distance calculated over a complete journey
    average velocity; The change in displacement Δs for a journey divided by the time taken Δt Δs/Δt
    Avogadro's constant; 6.02×10²³, the number of atoms in 0.012 kg (12 g) of carbon-12; symbol N_A
    A-scan; A one-dimensional ultrasound scan used to determine the distance or depth of an internal structure
    background radiation; The radiation emitted by the surroundings, which must be measured before radiation produced in an experiment can usefully be measured
    baryon; Any hadron made with a combination of three quarks
    base unit; One of seven units that form the building blocks of the SI measurement system
    battery; A collection of cells that transfers chemical energy into electrical energy
    becquerel; A unit of activity - one becquerel is an activity of one decay per second
    beta decay; A neutron in an unstable nucleus decays into a proton, an electron, and an electron antineutrino (β⁻ decay), or a proton into a neutron, a positron, and an electron neutrino (β⁺ decay)
    beta radiation; Ionising radiation consisting of fast-moving electrons (β⁻) or (β⁺) emitted from unstable nuclei, with a charge of -e or +e, respectively
    Big Bang; The theory that at a moment in the past all the matter in the Universe was contained in a singularity (a single point), the beginning of space and time, that expanded rapidly outwards
    binding energy; The minimum energy required to separate a nucleus into its constituent protons and neutrons an infinite distance away
    binding energy per nucleon; The binding energy divided by the number of protons and neutrons in the nucleus; the greater the binding energy per nucleon, the more tightly bound are the nucleons within the nucleus
    black body; An idealised object that absorbs all the electromagnetic radiation incident on it and, when in thermal equilibrium, emits a characteristic distribution of wavelengths at a specific temperature
    black hole; The remnant core of a massive star after it has gone supernova and the core has collapsed so far that in order to escape it an object would need an escape velocity greater than the speed of light, and therefore nothing, not even photons, can escape
    blue shift; The shortening of observed wavelength that occurs when a wave source is moving towards the observer - in astronomy, if a galaxy is moving towards the Earth, the absorption lines in its spectrum will be blue-shifted, that is, moved towards the blue end of the spectrum
    Boltzmann constant; The molar gas constant R divided by the Avogadro constant N_A, a constant that relates the mean kinetic energy of the atoms or molecules in a gas to the gas temperature - symbol k
    Boyle's Law; The pressure of an ideal gas is inversely proportional to its volume, provided that the mass of gas and the temperature do not vary
    braking distance; Distance travelled by a vehicle from the time the brakes are applied until the vehicle stops
    breaking strength; The stress value at the point of fracture, calculated by dividing the breaking force by the cross-sectional area
    brittle; Property of a material that does not show plastic deformation and deforms very little (if at all) under high stress
    Brownian motion; The continuous random motion of small particles suspended in a fluid, visible under a microscope
    B-scan; An ultrasound scan used to build up a two or three-dimensional image of an internal structure using a number of sensors or one sensor in different positions
    capacitance; The charge stored per unit potential difference across a capacitor
    capacitor; A component that stores charge, consisting of two plates separated by an insulator (dielectric)
    carbon dating; A method for determining the age of organic material, by comparing the activities, or the ratios, of carbon-14 to carbon-12 nuclei of the dead material of interest and similar living material
    cathode; A negatively charged electrode
    cation; A positively charged ion, one which is attracted to a cathode
    cell; A device that transfers chemical energy into electrical energy
    Celsius scale; A temperature scale with 100 degrees between the freezing point and the boiling point of pure water (at atmospheric pressure 1.01×10⁵ Pa, 0°C and 100°C)
    centre of gravity; An imaginary point at which the entire weight of an object appears to act
    centre of mass; A point through which any externally applied force produces straight-line motion but no rotation
    centripetal acceleration; The acceleration of any object travelling in a circular path at constant speed, which always acts towards the centre of the circle
    centripetal force; A force that keeps a body moving with a constant speed in a circular path
    chain reaction; A reaction in which the neutrons from an earlier fission stage are responsible for further fission reactions leading to an exponential growth in the rate of the reactions
    Chandrasekhar limit; The mass of a star's core beneath which the electron degeneracy pressure is sufficient to prevent gravitational collapse, 1.44 solar masses
    charge carrier; A particle with charge that moves through a material to form an electric current - for example, an electron in a metal wire
    closed system; An isolated system that has no interaction with its surroundings
    cloud chamber; A detector of ionising radiation consisting of a chamber filled with air saturated with vapour at a very low temperature so that droplets of liquid condense around ionised particles left along the path of radiation
    coherence; Two wave sources, or waves, that are coherent have a constant phase difference
    collimator; Part of a gamma camera, a honeycomb of long, thin tubes made from lead that absorbs any photons arriving at an angle to the axis of the tubes so that a clear picture is obtained
    comet; A small, irregular body made of ice, dust, and small pieces of rock in an (often highly eccentric elliptical) orbit around the Sun - as they approach the Sun, some comets develop spectacular tails
    component; One of the two perpendicular vectors obtained by resolving a vector
    compression; The decrease in length of an object when a compressive force is exerted on it
    compression (waves); A moving region in which the medium is denser or has higher pressure than the surrounding medium
    compressive deformation; A change in the shape of an object due to compressive forces
    compressive force; Two or more forces together that reduce the length or volume of an object
    conical pendulum; A simple pendulum that, instead of swinging back and forth, rotates in a horizontal circle at constant speed
    conservation of charge; A conservation law which states that electric charge can neither be created nor destroyed - the total charge in any interaction must be the same before and after the interaction
    constant speed; Motion in which the distance travelled per unit time stays the same
    constant velocity; Motion in which the change in displacement per unit time stays the same
    constructive interference; Superposition of two waves in phase so that the resultant wave has greater amplitude than the original waves
    continuous spectrum; A spectrum in which all visible frequencies or wavelengths are present (a heated solid metal such as a lamp filament will produce this type of spectrum)
    contrast; The difference in degree of blackening between structures
    contrast media; A substance, such as barium or iodine, which is a good absorber of X-rays
    control rods; Rods made of a material whose nuclei readily absorb neutrons (commonly boron or cadmium), which can be moved into or out of a reactor core to ensure that exactly one slow neutron survives per fission reaction or to completely stop the fission reaction
    conventional current; A model used to describe electric current in a circuit - conventional current travels from positive to negative - it is the direction in which positive charges would travel
    coolant; A substance that removes the thermal energy produced from reactions within a fission reactor
    corrected count rate; The radiation count rate measured in an experiment minus the background count rate
    cosmological principle; The assumption that, when viewed on a large enough scale, the Universe is homogeneous and isotropic, and the laws of physics are universal.
    coulomb; The derived SI unit of electrical charge, symbol C; 1 coulomb of electric charge passes a point in one second when there is an electric current of one ampere, 1 C = 1 A s
    Coulomb's law; Any two point charges exert an electrostatic (electrical) force on each other that is directly proportional to the product of their charges and inversely proportional to the square of their separation
    couple; A pair of equal and opposite forces acting on a body but not in the same straight line
    coupling gel; A gel with acoustic impedance similar to that of skin smeared onto the transducer and the patient's skin before an ultrasound scan in order to fill air gaps and ensure that almost all the ultrasound enters the patient's body
    critical angle; The angle of incidence at the boundary between two media that will produce an angle of refraction of 90°
    crystallography; A method for determining the structure of a substance by studying the interference patterns produced by waves passing through a crystal of the substance
    damping; The reduction in energy and amplitude of oscillations due to resistive forces on the oscillating system
    dark energy; A hypothetical form of energy that fills all of space and would explain the accelerating expansion of the Universe
    dark matter; A hypothetical form of matter spread throughout the galaxy that neither emits nor absorbs light - it could explain the differences between the predicted and observed velocities of stars in galaxies
    daughter nucleus; A new nucleus formed following a radioactive decay
    de Broglie equation; An equation relating the wavelength and the momentum of a particle: λ = h/p
    decay constant λ; The probability of decay of an individual nucleus per unit time
    density; The mass per unit volume of a substance
    derived quantity; A quantity that comes from a combination of base units
    derived unit; A unit used to represent a derived quantity, such as N for force
    destructive interference; Superposition of two waves in antiphase so that the waves cancel each other out and the resultant wave has smaller amplitude than the original waves
    diffraction; The phenomenon in which waves passing through a gap or around an obstacle spread out
    diffraction grating; A glass or plastic slide on which as many as 1000 lines in a millimetre are ruled, at a spacing that diffracts visible wavelengths of light
    diode; A semiconductor component that allows current only in one particular direction
    displacement; The distance travelled in a particular direction — it is a vector with magnitude and a direction
    displacement (waves); The distance from the equilibrium position in a particular direction — displacement is a vector, so it has a positive or negative value
    drag force; The resistive force exerted by a fluid on an object moving through it
    Doppler effect; The change in the frequency and wavelength of waves received from an object moving relative to an observer compared with what would be observed without relative motion
    Doppler equation; Δλ/λ = Δf/f = v/c, where λ is the source wavelength, Δλ is the change in wavelength recorded by the observer, f is the source frequency, Δf is the change in frequency recorded by the observer, v is the magnitude of the relative velocity between the source and observer, and c is the speed of light through a vacuum (3.00×10⁸ m s⁻¹)
    driving frequency; The frequency with which the periodic driver force is applied to a system in forced oscillation
    ductile; Property of a material that has a large plastic region in a stress-strain graph, so can be drawn into wires
    eccentricity; A measure of the elongation of an ellipse
    efficiency; The ratio of useful output energy to total input energy, often expressed as a percentage
    elastic deformation; A reversible change in the shape of an object due to a compressive or tensile force — removal of stress or force will return the object to its original shape and size (no permanent strain)
    elastic limit; The value of stress or force beyond which elastic deformation becomes plastic deformation, and the material or object will no longer return to its original shape and size when the stress or force is removed
    elastic potential energy; The energy stored in an object because of its deformation
    electric charge; A physical property, symbol q or Q, either positive or negative, measured in coulombs, C, or as a relative charge
    electric current; The rate of flow of charge, symbol I, measured in ampères, A; normally a flow of electrons in metals or a flow of ions in electrolytes
    electric field strength; The force experienced per unit positive charge at that point
    electric potential; The work done by an external force per unit positive charge to bring a charge from infinity to a point in an electric field – unit volt or J C⁻¹
    electric potential difference; The work done by an external force per unit positive charge to move a charge between two points in an electric field
    electricity meter; A device that measures the electrical energy supplied in kWh to a house from the grid
    electrolyte; A liquid containing ions that are free to move and so to conduct electricity
    electromagnetic spectrum; The full range of frequencies of electromagnetic waves, from gamma rays to radio waves
    electromagnetic wave; Transverse waves with oscillating electric and magnetic field components, such as light and X-rays, that do not need a medium to propagate — they travel at a speed of 3.0×10⁸ m s⁻¹ in a vacuum
    electromotive force (e.m.f.); Defined as the energy transferred from chemical to electrical energy per unit charge
    electron degeneracy pressure; A quantum-mechanical pressure created by the electrons in the core of a collapsing star due to the Pauli exclusion principle
    electron gun; A device that uses a large accelerating potential difference to produce a narrow beam of electrons
    electronvolt; A derived unit of energy used for subatomic particles and photons, defined as the energy transferred to or from an electron when it passes through a potential difference of 1 volt; 1 eV is equivalent to 1.60×10⁻¹⁹ J
    elementary charge; The electric charge equivalent to the charge on a proton, 1.60×10⁻¹⁹ C; symbol e
    elementary particle; A fundamental particle
    ellipse; An elongated 'circle' with two foci
    emission line spectrum; A set of specific frequencies of electromagnetic radiation, visible as bright lines in spectroscopy, emitted by excited atoms as their electrons make transitions between higher and lower energy states, losing the corresponding amount of energy in the form of photons as they do so – every element has a characteristic line spectrum
    energy; The capacity for doing work, measured in joules, J
    energy level; A discrete (quantised) amount of energy that an electron within an atom is permitted to possess
    equation of state of an ideal gas; pV = nRT, where n is the number of moles of gas
    equilibrium; A body is in equilibrium when the net force and net moment acting on it are zero
    equilibrium position (waves); The resting position of waves or particles in an oscillation
    escape velocity; The minimum velocity at which an object has just enough energy to leave a specified gravitational field
    excited (an atom); Containing an electron or electrons that have absorbed energy and been boosted into a higher energy level
    expanding Universe; The idea that the fabric of space and time is expanding in all directions and that as a result any point, in any part of the Universe, is moving away from every other point in the Universe, and the further the points are apart the faster their relative motion away from each other
    exponential decay; A constant-ratio process in which a quantity decreases by the same factor in equal time intervals
    extension; The increase in length of an object when a tensile force is exerted on it
    Faraday's law; The magnitude of the induced e.m.f. is directly proportional to the rate of change of magnetic flux linkage
    fiducial marker; A marker for a point used as a fixed basis for measurement or comparison
    filament lamp; An electrical component containing a narrow filament of wire that transfers electrical energy into heat and light
    fission; A process in which a large nucleus splits into two smaller nuclei after absorbing a neutron
    Fleming's left-hand rule; A mnemonic for the direction of the force experienced by a current-carrying wire placed perpendicular to the external magnetic field: on the left hand, the first finger gives the direction of the external magnetic field, the second finger gives the direction of the conventional current, and the thumb gives the direction of motion (force) of the wire
    fluid; A substance that can flow, including liquids and gases
    force; A push or pull on an object, measured in newtons, N
    force constant; A quantity determined by dividing force by extension (or compression) for an object obeying Hooke's law - called constant of proportionality k in Hooke's law, measured in N m⁻¹
    force-extension graph; A graph of force against extension (or compression), with the area under the graph equal to the work done on the material
    force-time graph; A graph of net force against time, with the area under the graph equal to the impulse
    forced oscillation; Oscillations acted on by a periodic external force where energy is given in order to sustain oscillations
    free oscillation; An oscillation where there are only internal forces (and no external forces) acting and there is no energy input
    free electron; An electron in a metal that is not bound to an atom and is free to move - sometimes called a delocalised electron
    free fall; The motion of an object accelerating under gravity with no other force acting on it
    free-body diagram; A diagram that represents the forces acting on a single object
    frequency (oscillations); The number of complete oscillations per unit time - unit Hertz (Hz)
    frequency (waves); The number of wavelengths passing a given point per unit time
    fundamental frequency; The lowest frequency at which an object (e.g., an air column in a pipe or a string fixed at both ends) can vibrate
    fundamental mode of vibration; A vibration at the fundamental frequency
    fundamental particle; A particle that has no internal structure and hence cannot be split into smaller particles
    fusion; A process in which two smaller nuclei join together to form one larger nucleus
    galaxy; A collection of stars and interstellar dust and gas bound together by their mutual gravitational force
    gamma radiation; Ionising radiation consisting of high-energy photons, with wavelengths less than about 10⁻¹³ m, which travel at the speed of light
    gamma rays; Short-wavelength electromagnetic waves, with wavelengths from 10⁻¹⁰ m to 10⁻¹⁶ m
    gas laws; The laws governing the behaviour of ideal gases, like Boyle's law
    gas pressure; In stars, the pressure of the nuclei in the star's core pushing outwards and counteracting the gravitational force pulling the matter in the star inwards
    geostationary satellite; A satellite that remains in the same position relative to a spot on the Earth's surface, by orbiting in the direction of the Earth's rotation over the equator with a period of 24 hours
    gold-leaf electroscope; A device with a metallic stem and a gold leaf that can be used to identify and measure electric charge - a device that was historically used as a voltmeter for measuring large voltages
    gradient; In a graph, the change in the vertical axis quantity divided by the corresponding change in the horizontal axis quantity
    grating equation; An equation that can be used to determine accurately the wavelength of monochromatic light sent through a diffraction grating, d sinθ = nλ
    gravitational potential; The work done per unit of mass in bringing a mass from infinity to a defined point
    ideal gas; A gas which obeys the equation of state pV = nRT at all pressures, volumes and temperatures
    Lenz's law; The induced e.m.f. is set up in a direction to produce effects that oppose the change causing it
    magnetic flux Φ; The product of the magnetic flux density B and the cross-sectional area A perpendicular to the direction of the magnetic flux density
    magnetic flux density B; The force F acting per unit current I per unit length l on a current-carrying conductor placed perpendicular to the magnetic field
    magnetic flux linkage; The product of the magnetic flux Φ and the number of turns of the coil N
    mass defect; The difference between the measured mass of a nucleus and the sum total of the masses of its constituents
    mean square speed; The mean of the squared velocities (of all the particles in a gas)
    medical tracer; A radiopharmaceutical, that is, a compound labelled with a radioisotope that can be traced inside the body using a gamma camera
    meson; Any hadron comprising a combination of a quark and an anti-quark
    microwave background radiation; The microwave signal of uniform intensity detected from all directions of the sky, which fits the profile for a black body at a temperature of 2.7 K
    microwaves; Long-wavelength electromagnetic waves, with wavelengths from 10⁻¹ m to 10⁻³ m
    minimum (waves); The point of least amplitude in an interference pattern, produced by destructive interference
    moderator; A substance used to slow down the fast neutrons produced in fission reactions so that they can propagate the fission reaction
    molar gas constant; The constant in the equation of state of an ideal gas - symbol R, 8.31 J K⁻¹ mol⁻¹
    molar mass; The mass of one mole of a substance
    mole; The amount of substance that contains as many elementary entities as there are atoms in 0.012 kg (12 g) of carbon-12
    moment; The product of force and perpendicular distance from a pivot or stated point
    monochromatic light; Light of a single frequency
    natural frequency; The frequency of a free oscillation
    nebula (plural nebulae); A cloud of dust and gas (mainly hydrogen), often many hundreds of times larger than our Solar System
    negative (charge); One type of electric charge; negatively charged objects attract positively charged ones, and repel other negative charges
    negative temperature coefficient (NTC); A relationship in which a variable decreases as temperature increases, for example the resistance of NTC thermistors
    neutrino; A lepton (a fundamental particle) that carries no charge and may have a tiny mass, less than a millionth the mass of an electron
    neutron; An electrically neutral particle, a hadron, found in the nucleus of atoms
    neutron star; The remnant core of a massive star after the star has gone supernova and (if the mass of the core is greater than the Chandrasekhar limit) the core has collapsed under gravity to an extremely high density (similar to that of an atomic nucleus, ∼10¹⁷ kg m⁻³), as it is almost entirely made up of neutrons
    Newton's first law of motion; A body will remain at rest or continue to move with constant velocity unless acted upon by a resultant force
    Newton's second law of motion; The rate of change of momentum of an object is directly proportional to the resultant force and takes place in the direction of the force
    Newton's third law of motion; When two objects interact, each exerts an equal but opposite force on the other during the interaction
    Newton's law of gravitation; The force between two point masses is directly proportional to the product of the masses and inversely proportional to the square of the separation between them; F = -GMm/r²
    node; For a stationary wave, a point where the amplitude is always zero
    non-ohmic component; A component that does not obey Ohm's law, e.g., filament lamp and diode
    normal; An imaginary line perpendicular to a surface such as the boundary between one medium and another (e.g., air and glass)
    normal contact force; The force exerted by a surface on an object, which acts perpendicularly to the surface
    nucleon; A particle in the nucleus of an atom, either a proton or a neutron
    nucleon number; The total number of protons and neutrons in a nucleus (also called the mass number); symbol A
    nucleus; The small, positively charged region at the centre of an atom where most of the mass of the atom is concentrated
    number density; The number of free electrons per cubic metre of a material, symbol n, unit m⁻³
    ohm; The derived SI unit of resistance, symbol Ω — defined as the resistance of a component that has a potential difference of 1 V per unit ampere
    Ohm's law; The potential difference across a conductor is directly proportional to the current in the component as long as its temperature remains constant
    ohmic conductor; A conductor that obeys Ohm's law
    optical fibre; A fibre made of glass designed with a varying refractive index in order to totally internally reflect pulses of visible or infrared light travelling through it
    oscillating motion; Repetitive motion of an object around its equilibrium position
    oscilloscope; An instrument that displays an electrical signal as a voltage against time trace on a screen
    out of phase; Particles that are neither in phase, nor in antiphase, are out of phase
    pair production; The replacement of a single photon with a particle and a corresponding antiparticle of the same total energy
    parallax angle; The angle of the apparent shift in the position of a relatively close star against the backdrop of much more distant stars as the Earth makes a quarter an orbit around the Sun
    parallel (vectors); In the same line and direction
    parallel circuit; A type of branching electrical circuit in which there is more than one path for the current — components in parallel have the same potential difference
    parent nucleus; A nucleus before the occurrence of radioactive decay
    partially polarised; Description of a transverse wave in which there are more oscillations in one particular plane, but the wave is not completely plane polarised — occurs when transverse waves reflect off a surface
    parsec; The distance at which a radius of one AU subtends an angle of one arcsecond
    path difference; The difference in the distance travelled by two waves from their source to a specific point
    peak; The maximum positive amplitude of a transverse wave
    perihelion; The closest point to the Sun in an orbit
    perfectly elastic collision; A collision in which no kinetic energy is transferred
    period (oscillations); The time taken to complete one oscillation
    period (waves); The time taken for one complete wavelength to pass a given point
    phase; A phase of matter is its state (solid, liquid, or gas)
    phase difference; The difference between the displacements of particles along a wave, or the difference between the displacements of particles on different waves, measured in degrees or radians, with each complete cycle or a difference of one wavelength representing 360° or 2π radians
    phase difference (for oscillating motion); The difference in displacement between two oscillating objects or the displacement of an oscillating object at different times - symbol φ
    photoelectric effect; The emission of photoelectrons from a metal surface when electromagnetic radiation above a threshold frequency is incident on the metal
    photoelectric effect equation; Einstein's equation relating the energy of a photon, the work function of a metal, and the maximum kinetic energy of any emitted photoelectrons: hf = φ + KE_max
    photoelectrons; Electrons emitted from the surface of a metal by the photoelectric effect
    photomultiplier tube; An apparatus that converts a photon of visible light into an electrical pulse, for example as part of a gamma camera
    photon; A quantum of electromagnetic energy — photon energy E is given by E = hf, where h is the Planck constant and f is the frequency of the electromagnetic radiation
    piezoelectric effect; The production of an electromotive force (e.m.f.) by some crystals, such as quartz, when they are compressed, stretched, twisted, or distorted
    pivot; A point about which a body can rotate
    Planck constant; Symbol h, an important constant in quantum mechanics, 6.63×10⁻³⁴ J s
    planet; An object in orbit around a star with a mass large enough for its own gravity to give it a round shape, that undergoes no fusion reactions, and that has cleared its orbit of most other objects
    planetary nebula; The outer layers of a red giant that have drifted off into space, leaving the hot core behind at the centre as a white dwarf
    planetary satellite; A body in orbit around a planet - it may be natural (a moon) or artificial
    plane polarised; Description of a transverse wave in which the oscillations are limited to only one plane
    plastic deformation; An irreversible change in the shape of an object due to a compressive or tensile force — removal of the stress or force produces permanent deformation
    plumb-line; A string with a weight used to provide a vertical reference line
    point mass; A mass with negligible volume
    polarisation; The phenomenon in which oscillations of a transverse wave are limited to only one plane
    polarity; The type of charge (positive or negative) or the orientation of a cell relative to a component
    polycrystalline graphite; Thin layers of graphite with regularly arranged carbon atoms in different orientations
    polymeric; Description of a material comprising of long-chain molecules, such as rubber, which may show large strains
    positive (charge); One type of electric charge — positively charged objects attract negatively charged ones, and repel other positive charges
    positron; The antiparticle of the electron
    Position Emission Tomography (PET); A type of nuclear medical procedure that images tissues and organs by measuring the metabolic activity of the cells of body tissues
    potential difference (p.d.); Defined as the energy transferred from electrical energy to other forms (heat, light, etc.) per unit charge.
    potential divider; An electrical circuit designed to divide the potential difference across two or more components (often two resistors) in order to produce a specific output
    potential divider equation; An equation relating the output potential difference from a simple potential divider containing a pair of resistors: V_out = (R₂/(R₁+R₂)) × V_in
    potentiometer; An electrical component with three terminals and some form of sliding contact that can be adjusted to vary the potential difference between two of the terminals
    power; The rate of work done, measured in watts, W
    prefix; A word or letter placed before another one, for example, 5.0 km is 5.0×10³ m
    pressure; The force exerted per unit cross-sectional area, measured in pascals, Pa
    principle of conservation of energy; The total energy of a closed system remains constant — energy cannot be created nor can it be destroyed
    principle of conservation of momentum; Total momentum of a system remains the same before and after a collision
    principle of moments; For a body in rotational equilibrium, the sum of the anticlockwise moments about a point is equal to the sum of the clockwise moments about the same point
    principle of superposition of waves; When two or more waves with the same frequency arrives at a point, the resultant displacement is the sum of the displacements of each wave
    progressive wave; A wave in which the peaks and troughs, or compressions and rarefactions, move through the medium as energy is transferred
    projectile; An object that is thrown or propelled on the surface of the Earth
    proton; A positively charged particle, a hadron, found in the nucleus of atoms
    proton number; The atomic number, that is, the number of protons in a nucleus - symbol Z
    protostar; A very hot, very dense sphere of condensing dust and gas that is on the way to becoming a star
    P-waves; Primary waves — longitudinal waves that travel through the Earth from an earthquake
    Pythagoras' theorem; The square of the length of the hypotenuse of a right-angled triangle equals the sum of the squares of the lengths of the other two sides
    quark; An elementary particle that can exist in six forms (plus their antiparticles) and joins with other quarks to make up hadrons
    quantisation; The availability of some quantities, such as energy or charge, only in certain discrete values
    quantity; A property of an object, substance, or phenomenon that can be measured
    quantum mechanics; The branch of physics dealing with phenomena on the very small scale, often less than the size of an atom
    radial field; A symmetrical field that diminishes with distance² from its centre, such as the gravitational field around a spherical mass or the electrical field around a spherical charged object
    radian; The angle subtended by a circular arc with a length equal to the radius of the circle (approximately 57.3°)
    radiation pressure; Pressure from the photons in the core of a star, which acts outwards to counteract the pressure from the gravitational force pulling the matter in the star inwards
    radioactive tracer; A radioactive substance that can be absorbed by tissue in order to study the structure and function of organs in the body
    radioactivity; The process by which unstable nuclei split, or decay, emitting ionising radiation (alpha particles, beta particles, and gamma rays)
    radiopharmaceutical; A radioisotope chemically combined with elements that will target particular tissues in order to ensure that the radioisotope reaches the correct organ or tumour for diagnosis or treatment
    radio waves; Long-wavelength electromagnetic waves, with wavelengths greater than 10⁻¹ m
    rarefaction (waves); A moving region in which the medium is less dense or has less pressure than the surrounding medium
    ray; A line representing the direction of energy transfer of a wave, perpendicular to the wavefronts
    red giant; An expanding star at the end of its life, with an inert core in which fusion no longer takes place, but in which fusion of lighter elements continues in the shell around the core
    red shift; The lengthening of observed wavelength that occurs when a wave source is moving away from the observer - in astronomy, if a galaxy is moving away from the Earth (receding), the absorption lines in its spectrum will be red-shifted
    red supergiant; A huge star in the last stages of its life before it 'explodes' in a supernova
    reflection; The change in direction of a wave at a boundary between two different media, so that the wave remains in the original medium
    refraction; The change in direction of a wave as it changes speed when it passes from one medium to another
    refractive index; The refractive index of a material n = c/v, where c is the speed of light through a vacuum and v is the speed of light through the material
    relative charge; A simplified measurement of the electric charge of a particle or object, measured as multiples of the elementary charge
    resistance; A property of a component calculated by dividing the potential difference across it by the current in it, symbol R, unit ohm, Ω
    resistivity; A property of a material, measured in Ω m, defined as the product of the resistance of a component made of the material and its cross-sectional area divided by its length
    resistor; An electrical component that obeys Ohm's law, transferring electrical energy to thermal energy
    resistor circuit; Two or more resistors arranged to provide a specific resistance
    resolving a vector; Splitting a vector into two component vectors perpendicular to each other
    resonance; The increase in amplitude of a forced oscillation when the driving frequency matches the natural frequency of the oscillating system
    rest mass; The mass of an object, such as a particle, when it is stationary
    restoring force; A force that tries to return a system to its equilibrium position
    resultant vector; A single vector that has the same effect as two or more vectors added together
    right-hand grip rule; For a current-carrying wire, the thumb points in the direction of the conventional current, and the direction of the field is given by the direction in which the fingers of the right hand would curl around the wire
    root mean square speed; The square root of the mean square speed (of all the particles in a gas)
    satellite; A body orbiting around planet
    scalar quantity; A quantity with magnitude (size) but no direction
    scintillator; Part of a gamma camera, often made of sodium iodide, which produces thousands of photons of visible light when struck by a single gamma photon
    semiconductor; A material with a lower number density than a typical conductor, for example silicon
    series; An arrangement of electrical components connected end-to-end that means that the current is the same in each component
    series circuit; A type of electrical circuit where the components are connected end-to-end
    sharpness; How well defined the edges of structures are
    simple harmonic motion; Oscillating motion for which the acceleration of the object is directly proportional to its displacement and is directed towards some fixed point - characterised by the equation a = -ω²x
    solar system; A planetary system consisting of a star and at least one planet in orbit around it - our own Solar System contains the Sun and all the objects that orbit it
    specific heat capacity; The energy required per unit mass to change the temperature by 1 K (or 1°C); unit J kg⁻¹ K⁻¹
    specific latent heat; The energy required to change the phase per unit mass while at constant temperature - symbol L
    specific latent heat of fusion; The energy required to change unit mass of a substance from solid to liquid while at constant temperature - symbol L_f
    specific latent heat of vaporisation; The energy required to change unit mass of a substance from liquid to gas while at constant temperature - symbol L_v
    spectral line; A line in an emission line spectrum or absorption line spectrum at a specific wavelength
    spectroscopy; A technique in physics in which spectral lines are identified and measured in order to identify elements present within stars
    standard form; Mathematical notation in which a number is shown with the decimal point placed after the first digit, followed by ×10 raised to an appropriate power
    standard model; The current theory of particle physics that deals with elementary particles (quarks, electrons, etc.) and their interactions
    standing wave; A wave that remains in a constant position with no net transfer of energy and is characterised by its nodes and antinodes - also called a stationary wave
    stationary wave; A wave that remains in a constant position with no net transfer of energy and is characterised by its nodes and antinodes - also called a standing wave
    Stefan constant; The constant σ in Stefan's law, L = 4πr²σT⁴, relating the luminosity L of a star to its surface area 4πr² and its absolute surface temperature T: σ = 5.67×10⁻⁸ W m⁻² K⁻⁴
    stellar parallax; A technique used to determine the distance to stars that are relatively close to the Earth (less than 100 pc) by comparing their apparent positions against distant stars at times 6 months apart
    step-down transformer; A transformer with fewer turns on the secondary than on the primary coil, and a lower output voltage than input voltage
    step-up transformer; A transformer with more turns on the secondary than on the primary coil, and a higher output voltage than input voltage
    stiffness; The ability of an object to resist deformation
    stopping distance; The total distance travelled from the time when a driver first sees a reason to stop to the time when the vehicle stops, the sum of the thinking distance and the braking distance
    strong material; A material with a large value for the ultimate tensile strength
    strong nuclear force; One of the four fundamental forces in nature, acting on hadrons and holding nuclei together
    superconductivity; A phenomenon in which the resistivity of a material falls to almost zero when the material is cooled below a certain temperature
    supernova; The implosion of a red supergiant at the end of its life, which leads to subsequent ejection of stellar matter into space, leaving an inert remnant core
    superposition (waves); Overlap of two waves at a point in space
    S-waves; Secondary waves: transverse waves that travel through the Earth from an earthquake
    target metal; A metal with a high melting point used for the anode in an X-ray tube, for example tungsten
    tensile deformation; A change in the shape of an object due to tensile forces
    tensile force; Equal and opposite forces acting on a material to stretch it
    tensile strain; The extension per unit length, a dimensionless quantity
    tensile stress; The force per unit cross-sectional area, measured in Pa
    tension; The pulling force exerted by a string, cable, or chain on an object
    terminal p.d.; The potential difference across an electrical power source — when there is no current this is equal to the e.m.f. of the source, but if there is a current in the source this is equal to the e.m.f. minus the lost volts
    terminal velocity; The constant speed reached by an object when the drag force (and upthrust) is equal and opposite to the weight of the object
    thermal equilibrium; A state in which there is no net flow of thermal energy between the objects involved, that is, objects in thermal equilibrium must be at the same temperature
    thermal neutron; A neutron in a fission reactor with mean kinetic energy similar to the thermal energy of particles in the reactor core — also known as a slow neutron
    thermionic emission; The emission of electrons (or other charge carriers) from the surface of a heated piece of metal
    thermistor; An electrical component that has a resistance that decreases as the temperature increases (a negative temperature coefficient)
    thinking distance; The distance travelled by a vehicle from when the driver first perceives a need to stop to when the brakes are applied
    threshold frequency; The minimum frequency of the electromagnetic radiation that will cause the emission of an electron from the surface of a particular metal — symbol f₀ measured in Hz
    threshold voltage; The minimum potential difference at which a diode begins to conduct
    time constant; The product of capacitance and resistance, CR, for a capacitor-resistor circuit — equal to the time taken for the p.d. (or the current or the charge) to decrease to e⁻¹ (about 37%) of its initial value when the capacitor discharges through a resistor — symbol τ
    time of flight; The time taken for an object to complete its motion
    timebase; The time interval represented by one horizontal square on an oscilloscope screen
    torque (of a couple); The product of one of the forces of a couple and the perpendicular distance between the forces
    total internal reflection; The reflection of all light hitting a boundary between two media back into the original medium when the light is travelling through the medium with the higher refractive index and the incidence angle at the boundary is greater than the critical angle
    transverse wave; A wave in which the medium is displaced perpendicular to the direction of energy transfer — the oscillations of medium particles are perpendicular to the direction of travel of the wave
    triangle of forces; Three forces acting at a point in equilibrium, represented by the sides of a triangle
    triple point; For a given substance, one specific temperature and pressure at which all three phases of that substance can exist in thermodynamic equilibrium
    trough; The maximum negative amplitude of a transverse wave
    turn-ratio equation; Equation for a transformer: V_s/V_p = n_s/n_p, where output voltage is V_s, input voltage is V_p, n_s is the number of turns on the secondary coil and n_p is the number of turns on the primary coil
    ultimate tensile strength; The maximum stress that a material can withstand before it breaks
    ultraviolet; Electromagnetic waves, with wavelengths from 4×10⁻⁷ m to 10⁻⁸ m
    ultrasound transducer; A device used both to generate and to receive ultrasound, which changes electrical energy into sound and sound into electrical energy
    uniform gravitational field; A gravitational field in which the field lines are parallel and the value for g remains constant
    Universe; Everything that exists within space and time
    unpolarised; Description of a transverse wave in which the oscillations occur in many planes
    upthrust; The upward buoyant force exerted on a body immersed in a fluid
    vector quantity; A quantity with magnitude (size) and direction
    vector triangle; A triangle constructed to scale to determine the resultant of two vectors
    velocity; A vector quantity equal to the rate of change of displacement
    velocity selector; A device that uses both electric and magnetic fields to select charged particles of specific velocity
    visible light; Electromagnetic waves, with wavelengths from 4×10⁻⁷ m to 7×10⁻⁷ m
    volt; The derived SI unit of potential difference and electromotive force, symbol V, defined as the energy transferred per unit charge, whether energy is either transferred to or from the charges — 1 V is the p.d. across a component when 1 J of energy is transferred per 1 C passing through the component
    voltmeter; A device used to measure potential difference — it must be placed in parallel across components and ideally have an infinite resistance
    wave equation; An equation that relates the frequency f in hertz, the wavelength λ in metres, and the wave speed v in m s⁻¹: v = fλ
    wave profile; A graph showing the displacement of the particles in the wave against the distance along the wave
    wave source; A source of waves, such as light or sound - the object moving relative to an observer of the Doppler effect
    wave speed; The distance travelled by the wave per unit time
    wavefront; A line of points in phase with each other in a wave, perpendicular to the direction of energy transfer
    wavelength; The minimum distance between two points oscillating in phase, for example the distance from one peak to the next or from one compression to the next
    wave-particle duality; A theory that states that matter has both particle and wave properties and also electromagnetic radiation has wave and particulate (photon) nature
    weak nuclear force; One of the four fundamental forces in nature, responsible for inducing beta-decay within unstable nuclei
    weight; The gravitational force on an object, measured in newtons, N
    white dwarf; A very dense star formed from the core of a red giant, in which no fusion occurs
    Wien's displacement law; The peak wavelength λ_max at which the intensity of radiation from a black body is a maximum is inversely proportional to the absolute temperature T of the black body
    work; The product of force and the distance moved in the direction of the force, measured in J
    work function; The minimum energy needed to remove a single electron from the surface of a particular metal; symbol Φ, measured in J
    X-rays; Short-wavelength electromagnetic waves, with wavelengths from 10⁻⁸ m to 10⁻¹³ m, which can be used in medical imaging
    X-ray attenuation; The reduction in energy, or intensity, of a beam of X-rays due to their interaction with matter
    X-ray tube; A piece of equipment that produces X-ray photons by firing electrons from a heated cathode across a large p.d. in an evacuated tube - X-ray photons are produced when the electrons are decelerated by hitting the target metal of the anode
    yield point; A point on a stress-strain graph beyond which the deformation is no longer entirely elastic
    Young modulus; The ratio of tensile stress to tensile strain when these quantities are directly proportional to each other, measured in Pa
    `;

    // ========== FULL OCR CHEMISTRY GLOSSARY (from PDF pages 1-8) ==========
    const chemistryRaw = `
    acid; A species that releases H⁺ ions in aqueous solution.
    acid dissociation constant Kₐ; The equilibrium constant that shows the extent of dissociation of a weak acid. For a weak acid HA(aq) Kₐ = [H⁺(aq)][A⁻(aq)]/[HA(aq)]
    acid-base pair; A pair of two species that transform into each other by gain or loss of a proton.
    activation energy; The minimum energy required to start a reaction by the breaking of bonds.
    actual yield; The amount of product obtained from a reaction.
    addition polymerisation; Formation of a very long molecular chain, by repeated addition reactions of many unsaturated alkene molecules (monomers).
    addition reaction; A reaction in which a reactant is added to an unsaturated molecule to make a one saturated molecule.
    adsorption; The process that occurs when a gas or liquid or solute is held to the surface of a solid.
    alicyclic; Containing carbon atoms joined together in a ring that is not aromatic.
    aliphatic; Containing carbon atoms joined together in straight or branched chains.
    alkali; A type of base that dissolves in water forming hydroxide ions, OH⁻(aq) ions.
    alkanes; The hydrocarbon homologous series with single carbon-to-carbon bonds and the general formula: CₙH₂ₙ₊₂.
    alkenes; The hydrocarbon homologous series with at one double carbon-to-carbon bonds and the general formula: CₙH₂ₙ.
    alkyl group; A side chain formed by removing a hydrogen atom removed from an alkane parent chain, for example, CH₃, C₂H₅; any alkyl group is often shown as R.
    alkynes; The hydrocarbon homologous series with one triple carbon-to-carbon bonds and the general formula: CₙH₂ₙ₋₂.
    amount of substance; The quantity whose unit of the mole, used as a means of counting any species such as atoms, ions and molecules.
    anhydrous; Containing no water molecules.
    anion; A negatively charged ion with more electrons than protons.
    aromatic; Containing one or more benzene rings.
    atom economy; (Sum of molar masses of desired products) / (sum of molar masses of all products) × 100%
    atomic (proton) number; The number of protons in the nucleus of an atom.
    atomic orbital; A region around the nucleus that can hold up to two electrons, with opposite spins.
    average bond enthalpy; The average enthalpy change that takes place when breaking by homolytic fission 1 mol of a given type of bond in the molecules of a gaseous species.
    Avogadro constant N_A; The number of atoms per mole of the carbon-12 isotope. (6.02×10²³ mol⁻¹)
    base; A compound that neutralises an acid to form a salt
    binary compound; A compound containing two elements only
    bond angle; The angle between two bonds at an atom
    bond dissociation enthalpy; The enthalpy change that takes place when breaking by homolytic fission 1 mol of a given bond in the molecules of a gaseous species.
    bonded pair; A pair of electrons shared between two atoms to make a covalent bond
    Brønsted–Lowry acid; A species that is a proton, H⁺, donor.
    Brønsted–Lowry base; A species that is a proton, H⁺, acceptor.
    buffer solution; A system that minimises pH changes on addition of small amounts of an acid or a base.
    carbocation; An ion that contains a positively charged carbon atom.
    catalyst; A substance that increases the rate of a chemical reaction without being used up in the process; a catalyst provide an alternative route for the reaction with lower activation energy.
    cation; A positively charged ion with fewer electrons than protons.
    chain reaction; A reaction in which the propagation steps release new radicals that continue the reaction.
    chemical shift δ; A scale, in ppm, that compares the frequency of an NMR absorption with the frequency of the reference TMS at δ = 0 ppm.
    chiral carbon; A carbon atom attached to four different atoms or groups of atoms.
    chromatogram; A visible record showing the result of separation of the components of a mixture by chromatography.
    cis-trans isomerism; A special type of E/Z isomerism in which there are two non-hydrogen groups and two hydrogen atoms around the C=C double bond: the cis isomer (Z isomer) has H atoms on each carbon on the same side; the trans isomer (E isomer) has H atoms on each carbon on different sides.
    closed system; A system isolated from its surroundings.
    collision theory; Two reacting particles must collide for a reaction to occur, and must be in the correct orientation and have sufficient energy to overcome the activation energy of the reaction.
    complex ion; A transition metal ion bonded to ligands by coordinate bonds (dative covalent bonds).
    concentration; The amount of solute, in moles, dissolved in 1 dm³ (1000 cm³) of solution.
    condensation reaction; A reaction in which two small molecules react together to form a larger molecule with elimination of a small molecule such as water.
    conjugate acid; A species that releases a proton to form a conjugate base.
    conjugate base; A species that accepts a proton to form a conjugate acid.
    coordinate bond; A shared pair of electrons in which the bonded pair has been provided by one of the bonding atoms only; also called a dative covalent bond.
    coordination number; The total number of coordinate bonds formed between a central metal ion and ligands.
    covalent bond; The strong electrostatic attraction between a shared pair of electrons and the nuclei of the bonded atoms.
    dative covalent; A shared pair of electrons in which the bonded pair has been provided by one of the bonding atoms only; also called a coordinate bond.
    dehydration; An elimination reaction in which water is removed from a saturated molecule to make an unsaturated molecule.
    delocalised electrons; Electrons that are shared between more than two atoms.
    desorption; Release of an adsorbed substance from a surface.
    dipole; A separation in electrical charge so that one atom of a polar covalent bond, or one end of a polar molecule, has a small positive charge δ+ and the other has a small negative charge δ-
    displacement reaction; A reaction in which a more reactive element displaces a less reactive element from an aqueous solution of its ions.
    displayed formula; A formula showing the relative positioning of all the atoms in a molecule and the bonds between them.
    disproportionation; A redox reaction in which the same element is both oxidised and reduced.
    dynamic equilibrium; The equilibrium that exists in a closed system when the rate of the forward reaction is equal to the rate of the reverse reaction and concentrations do not change.
    E/Z isomerism; A type of stereoisomerism in which different groups attached to each carbon of a C=C double bond may be arranged differently in space because of the restricted rotation of the C=C bond.
    electron configuration; A shorthand representation that shows how electrons occupy sub-shells in an atom.
    electronegativity; A measure of the attraction of a bonded atom for the pair of electrons in a covalent bond.
    electrophile; An atom (or group of atoms) which is attracted to an electron-rich centre or atom, where it accepts a pair of electrons to form a new covalent bond.
    electrophilic addition; An addition reaction in which the first step is attack by an electrophile on a region of high electron density.
    electrophilic substitution; A type of substitution reaction in which an electrophile is attracted to an electron-rich centre or atom, where it accepts a pair of electrons to form a new covalent bond.
    elimination reaction; The removal of a molecule from a saturated molecule to make an unsaturated molecule.
    empirical formula; The formula that shows the simplest whole-number ratio of atoms of each element present in a compound.
    enantiomers; Stereoisomers that are non-superimposable mirror images of each other; also called optical isomers.
    end point; The point in a titration where the indicator changes colour; the end point indicates when the reaction is just complete.
    endothermic reaction; A reaction in which the enthalpy of the products is greater than the enthalpy of the reactants, resulting in heat being taken in from the surroundings (ΔH is positive).
    enthalpy H; The heat content that is stored in a chemical system.
    enthalpy change ΔH; The difference between the enthalpy of the products and the enthalpy of the reactants.
    enthalpy cycle; A diagram showing alternative routes between reactants and products which allows the indirect determination of an enthalpy change from other known enthalpy changes using Hess's law.
    enthalpy profile diagram; A diagram for a reaction to compares the enthalpy of the reactants with the enthalpy of the products.
    entropy; The measure of the dispersal of energy and disorder within the chemicals making up the chemical system.
    equilibrium constant K_c; A measure of the position of equilibrium; the magnitude of an equilibrium constant indicates whether there are more reactants or more products in an equilibrium system.
    equivalence point; The point in a titration at which the volume of one solution has reacted exactly with the volume of the second solution.
    esterification; A reaction in which a carboxylic acid reacts with an alcohol to form an ester and water.
    exothermic reaction; A reaction in which the enthalpy of the products is smaller than the enthalpy of the reactants, resulting in heat loss to the surroundings (ΔH is negative).
    fingerprint region; An area of an infrared spectrum below 1500 cm⁻¹ that gives a characteristic pattern for different compounds.
    first electron affinity; The enthalpy change that takes place when one electron is added to each atom in one mole of gaseous atoms to form one mole of gaseous 1- ions.
    first ionisation energy; The energy required to remove one electron from each atom in one mole of gaseous atoms of an element to form one mole of gaseous 1+ ions.
    fractional distillation; The separation of components in a liquid mixture by their different boiling points into fractions with different compositions.
    fragment ions; Ions formed from the breakdown of the molecular ion in a mass spectrometer.
    fragmentation; The process in mass spectrometry that causes a positive ion to split into smaller pieces, one of which is a positive fragment ion.
    free energy change ΔG; The balance between enthalpy, entropy and temperature for a process given by ΔG = ΔH - TΔS. A process is feasible when ΔG < 0.
    functional group; The part of the organic molecule responsible for its chemical reactions.
    general formula; The simplest algebraic formula of a member of a homologous series. For example, the general formula of the alkanes is CₙH₂ₙ₊₂.
    giant covalent lattice; A three-dimensional structure of atoms, bonded together by strong covalent bonds.
    giant ionic lattice; A three-dimensional structure of oppositely charged ions, bonded together by strong ionic bonds.
    giant metallic lattice; A three-dimensional structure of positive ions and delocalised electrons, bonded together by strong metallic bonds.
    group; A vertical column in the periodic table. Elements in a group have similar chemical properties and their atoms have the same number of outer shell electrons.
    half-life; The time taken for the concentration of a reactant to decrease by half.
    Hess's Law; If a reaction can take place by more than one route and the initial and final conditions are the same, the total enthalpy change is the same for each route.
    heterogeneous catalysis; A reaction in which the catalyst has a different physical state from the reactants; frequently reactants are gases whilst the catalyst is a solid.
    heterogeneous equilibrium; An equilibrium in which the species making up the reactants and products have different physical states.
    heterolytic fission; The breaking of a covalent bond with both of the bonded electrons going to each atom, forming a cation (positive ion) and an anion (negative ion).
    homogeneous catalysis; A reaction in which the catalyst and reactants are in the same physical state, which is most frequently the aqueous or gaseous state.
    homogeneous equilibrium; An equilibrium in which all the species making up the reactants and products have the same physical state.
    homologous series; A series of organic compounds with the same functional group but with each successive member differing by CH₂.
    homolytic fission; The breaking of a covalent bond with one of the bonded electrons going to each atom, forming two radicals.
    hydrated; A crystalline compound containing water molecules.
    hydrocarbon; A compound of hydrogen and carbon only.
    hydrogen bond; A strong dipole-dipole attraction between an electron-deficient hydrogen atom of –NH, –OH or HF on one molecule and a lone pair of electrons on a highly electronegative atom containing N, O or F on a different molecule.
    hydrolysis; A reaction with water that breaks a chemical compound into two compounds, the H and OH in a water molecule becomes incorporated into the two compounds.
    induced dipole-dipole interaction; Attractive forces between induced dipoles in different molecules - also called London Forces.
    infrared spectroscopy; An instrumentation method of analysis that identifies bonds from absorption of the infrared radiation of different wavelengths.
    initial rate of reaction; The change in concentration of a reactant or product per unit time at the start of the reaction: t = 0
    initiation; The first stage in a radical reaction in which radicals starts when a covalent bond is broken by homolytic fission of a covalent bond.
    intermediate; A species formed during a reaction that reacts further and is not present in the final products.
    intermolecular force; An attractive force between molecules. Intermolecular forces can be London forces, permanent dipole-dipole interactions or hydrogen bonding.
    ion; A positively or negatively charged atom or a (covalently bonded) group of atoms (a polyatomic ion), where the number of electrons is different from the number of protons.
    ionic bonding; The electrostatic attraction between positive and negative ions.
    ionic product of water K_w; The product of the ions formed in the partial dissociation of water, given by K_w = [H⁺(aq)][OH⁻(aq)]
    isotopes; Atoms of the same element with different numbers of neutrons and different masses.
    lattice enthalpy; The enthalpy change that accompanies the formation of one mole of an ionic compound from its gaseous ions under standard conditions.
    Le Chatelier's principle; When a system in dynamic equilibrium is subjected to a external change, the system readjusts itself to minimise the effect of the change and to restore equilibrium.
    ligand; A molecule or ion that can donate a pair of electrons to the transition metal ion.
    ligand substitution; A reaction in which one or more ligands in a complex ion are replaced by different ligands.
    limiting reagent; The reactant that is not in excess, which will be used up first and stop the reaction.
    lone pair; An outer shell pair of electrons that is not involved in chemical bonding.
    mass number; The sum of the number of protons and neutrons in the nucleus - also known as nucleon number.
    metallic bond; The electrostatic attraction between positive metal ions and delocalised electrons.
    mobile phase; The phase that moves in chromatography.
    molar gas volume V_m; The volume per mole of gas molecules at a stated temperature and pressure.
    molar mass M; The mass per mole of a substance, in units of g mol⁻¹.
    mole; The amount of any substance containing as many elementary particles as there are carbon atoms in exactly 12 g of the carbon-12 isotope, that is, 6.02×10²³ particles.
    molecular formula; A formula that shows the number and type of atoms of each element present in a molecule.
    molecular ion; The positive ion formed in mass spectrometry when a molecule loses an electron.
    molecule; The smallest part of a covalent compound that can exist while retaining its chemical identity, consisting of two or more atoms covalently bonded together.
    monomer; A small molecule that combines with many other monomers to form a polymer.
    neutralisation; A chemical reaction in which an acid and a base react together to produce a salt.
    nomenclature; A system of naming compounds.
    non-polar; With no charge separation across a bond or in a molecule.
    nucleophile; An atom (or group of atoms) which is attracted to an electron-deficient centre or atom, where it donates a pair of electrons to form a new covalent bond.
    nucleophilic substitution; A reaction in which a nucleophile is attracted to an electron-deficient carbon atom, and replaces an atom or group of atoms on the carbon atom.
    optical isomers; Stereoisomers that are non-superimposable mirror images of each other; also called 'enantiomers'.
    order; The power to which the concentration of a reactant is raised in the rate equation.
    overall order; The sum of the individual orders of reactants in the rate equation: m + n
    oxidation; Loss of electrons or an increase in oxidation number.
    oxidation number; A measure of the number of electrons that an atom uses to bond with atoms of another element. Oxidation numbers are derived from a set of rules.
    oxidation state; The oxidation number.
    oxidising agent; A reagent that oxidises (takes electrons from) another species.
    π-bond; A bond formed by the sideways overlap of two p-orbitals, with the electron density above and the plane of the bonding atoms.
    partial dissociation; The splitting of some of a species in solution into aqueous ions.
    Pauling electronegativity value; A value assigned as a measure of the relative attraction of a bonded atom for the pair of electrons in a covalent bond.
    percentage yield; % yield = (actual amount, in mol, of product / theoretical amount, in mol, of product) × 100
    period; A horizontal row of elements in the periodic table. Elements show trend in properties across a period.
    periodicity; A repeating trend in properties of the elements across each period of the periodic table.
    permanent dipole; A small charge difference that does not change across a bond, with δ+ and δ- partial changes on the bonded atoms: the result of the bonded atoms having different electronegativities.
    Permanent dipole-dipole interaction; An attractive force between permanent dipoles in neighbouring polar molecules.
    pH; The expression, pH = -log[H⁺(aq)]
    polar (molecule); With δ+ and δ- charges at different ends of the molecule.
    polar covalent bond; A bond with a permanent dipole, having δ+ and δ- partial changes on the bonded atoms.
    polar molecule; A molecule with an overall dipole, having taken into account any dipoles across bonds and the shape of the molecule.
    polyatomic ion; An ion containing more than one atom.
    polymer; An large molecule formed from many thousands of repeat units of smaller molecules known as monomers.
    position of equilibrium; The relative quantities of reactants and products, indicating the extent of a reversible reaction at equilibrium.
    precipitation reaction; The formation of a solid from a solution during a chemical reaction. Precipitates are often formed when two aqueous solutions are mixed together.
    primary; On a carbon atom at the end of a chain.
    radical; Species with an unpaired electron.
    rate equation; Rate = k[A]ᵐ[B]ⁿ for a reaction with reactants A and B.
    reaction mechanism; A step-by-step sequence of bond breaking and bond forming that shows the path taken by electrons in a reaction.
    redox; A reaction in which both reduction and oxidation take place.
    reduction; Gain of electrons or a decrease in oxidation number.
    reflux; The continuous boiling and condensing of a reaction mixture to ensure that the reaction goes to completion without loss of volatile substances.
    relative atomic mass; The weighted mean mass of an atom of an element compared with one-twelfth of the mass of an atom of carbon-12.
    repeat unit; The specific arrangement of atoms that repeats over and over again to make up a polymer chain.
    retention time; The time taken for a component to pass through a chromatography column.
    reversible reaction; A reaction that can proceed in both the forward and reverse directions.
    RF value; In thin-layer chromatography, the distance travelled by the spot divided by the distance travelled by the solvent front.
    salt; A chemical compound formed from an acid and a base.
    saturated; Containing only single carbon-to-carbon bonds.
    shell; A group of atomic orbitals with the same principal quantum number.
    simple molecular lattice; A three-dimensional structure of molecules, bonded together by weak intermolecular forces.
    skeletal formula; A simplified organic formula, with hydrogen atoms removed from alkyl chains, leaving just a carbon skeleton and associated functional groups.
    specific heat capacity c; The energy required to raise the temperature of 1 g of a substance by 1°C.
    spectator ions; Ions that are present but take no part in a chemical reaction.
    spin-spin coupling; In an NMR spectrum, the interaction between spin states of non-equivalent nuclei that results in the splitting of a signal.
    standard conditions; A pressure of 100 kPa, a stated temperature, usually 298 K (25°C) and a concentration of 1 mol dm⁻³ (for reactions with aqueous solutions).
    standard electrode potential E⦵; The e.m.f. of a half-cell compared with a standard hydrogen half-cell, measured at 298 K with solution concentrations of 1 mol dm⁻³ and a gas pressure of 100 kPa.
    standard enthalpy change of atomisation; The enthalpy change that takes place when one mole of gaseous atoms forms from the element in its standard state.
    standard enthalpy change of combustion Δ_cH⦵; The enthalpy change that takes place when one mole of a substance reacts completely with oxygen under standard conditions, all reactants and products being in their standard states.
    standard enthalpy change of formation; Δ_fH⦵; The enthalpy change that takes place when one mole of a compound is formed from its constituent elements in their standard states under standard conditions.
    standard enthalpy change of hydration; The enthalpy change that takes place when one mole of isolated gaseous ions is dissolved in water forming one mole of aqueous ions under standard conditions.
    standard enthalpy change of neutralisation; Δ_neutH⦵; The enthalpy change that accompanies the reaction of an acid by a base to form one mole of H₂O(l), under standard conditions, with all reactants and products in their standard states.
    standard enthalpy change of reaction; Δ_rH⦵; The enthalpy change that accompanies a reaction in the molar quantities expressed in a chemical equation under standard conditions, all reactants and products being in their standard states.
    standard enthalpy change of solution; The enthalpy change that takes place when one mole of a compound is completely dissolved in water under standard conditions.
    standard solution; A solution of known concentration.
    standard state; The physical state of a substance under standard conditions of 100 kPa and a stated temperature (usually 298 K).
    stationary phase; The phase that does not move in chromatography.
    stereoisomers; Compounds with the same structural formula but with a different arrangement of the atoms in space.
    stoichiometry; The ratio of the amount, in moles, of each substance in a chemical equation (essentially the ratio of the balancing numbers).
    strong acid; An acid that dissociates completely in solution.
    structural formula; A formula showing the minimal detail for the arrangement of atoms in a molecule.
    structural isomers; Molecules with the same molecular formula but with different structural formulae.
    sub-shell; A group of orbitals of the same type within a shell.
    substitution reaction; A reaction in which an atom or group of atoms is replaced with a different atom or group of atoms.
    surroundings; Everything that is not the chemical system.
    system; The chemicals involved in the reaction.
    termination; The step at the end of a radical substitution when two radicals combine to form a molecule.
    tertiary alcohol; An alcohol in which the –OH group is attached to a carbon atom that is attached to three carbon atoms and no hydrogen atoms.
    theoretical yield; The yield resulting from complete conversion of reactants into products.
    thermal decomposition; The breaking up of a chemical substance with heat into at least two chemical substances.
    titre; The volume added from the burette when the volume of one solution has exactly reacted with the other solution.
    transition element; A d-block element which forms an ion with an incomplete d-sub-shell.
    unsaturated; Containing a multiple carbon-carbon bond.
    volatility; The ease at which a liquid turns into a gas. Volatility increases as boiling point decreases.
    water of crystallisation; Water molecules that are bonded into a crystalline structure of a compound.
    weak acid; An acid that dissociates only partially in solution.
    `;

    // ----- PARSER (same as before) -----
    function capitalizeFirst(term) {
        if (!term) return term;
        return term.charAt(0).toUpperCase() + term.slice(1);
    }

    function parseGlossary(rawText) {
            const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            const cards = [];
            for (let line of lines) {
                if (/^\d+$/.test(line) || line.startsWith('=====')) continue;

                // Primary rule: split at the first semicolon
                const semi = line.indexOf(';');
                if (semi !== -1) {
                    let term = line.substring(0, semi).trim();
                    let definition = line.substring(semi + 1).trim();
                    term = term.replace(/[:\-—\s]*$/, '').trim();
                    term = capitalizeFirst(term);
                    if (term.length > 1 && definition.length > 1) {
                        cards.push({ term, definition });
                        continue;
                    }
                }

                // Fallback heuristics for any lines without a semicolon or that failed the primary rule
                let splitIndex = -1;
                const patterns = [/\s+The\s+/, /\s+A\s+/, /\s+An\s+/];
                for (let pat of patterns) {
                    const match = line.match(pat);
                    if (match) { splitIndex = match.index; break; }
                }
                if (splitIndex !== -1) {
                    let term = line.substring(0, splitIndex).trim();
                    let definition = line.substring(splitIndex).trim();
                    term = term.replace(/[:\-—]\s*$/, '').trim();
                    term = capitalizeFirst(term);
                    if (term.length > 1 && definition.length > 5) cards.push({ term, definition });
                } else {
                    const words = line.split(' ');
                    let termEnd = 0;
                    for (let i = 1; i < words.length; i++) {
                        if (words[i] && /^[A-Z0-9]/.test(words[i]) && i > 0) {
                            termEnd = line.indexOf(words[i]) - 1;
                            break;
                        }
                    }
                    if (termEnd > 2) {
                        let term = line.substring(0, termEnd).trim();
                        let definition = line.substring(termEnd).trim();
                        term = term.replace(/[:\-—]\s*$/, '');
                        term = capitalizeFirst(term);
                        if (term.length > 1 && definition.length > 3) cards.push({ term, definition });
                    }
                }
            }
            const unique = [];
            const seen = new Set();
            for (let c of cards) {
                const key = c.term.toLowerCase();
                if (!seen.has(key)) { seen.add(key); unique.push(c); }
            }
            return unique;
    }

    let physicsMaster = parseGlossary(physicsRaw);
    let chemistryMaster = parseGlossary(chemistryRaw);
    if (physicsMaster.length === 0) physicsMaster = [{ term: "Acceleration", definition: "Rate of change of velocity" }];
    if (chemistryMaster.length === 0) chemistryMaster = [{ term: "Acid", definition: "Proton donor" }];

    // ---------- App State ----------
    let currentSubject = 'physics';
    let masterDeck = [...physicsMaster];      // full deck for current subject
    let filteredDeck = [...masterDeck];       // currently displayed (filtered)
    let currentIndex = 0;
    let definitionVisible = false;
    let searchQuery = '';
    let showStarredOnly = false;
    let starMap = loadStarMap();

    // DOM elements (assigned during init)
    let termDisplay, definitionDisplay, cardCounter, subjectTitle;
    let flashcardDiv, prevBtn, nextBtn, shuffleBtn, resetBtn;
    let btnPhysics, btnChemistry, searchInput, clearSearchBtn, starBtn, toggleStarFilterBtn;

    function normalizeTerm(term) {
        return term.trim().toLowerCase();
    }

    function loadStarMap() {
        const raw = localStorage.getItem('flashcardStars');
        if (!raw) return { physics: new Set(), chemistry: new Set() };
        try {
            const parsed = JSON.parse(raw);
            return {
                physics: new Set(parsed.physics || []),
                chemistry: new Set(parsed.chemistry || [])
            };
        } catch (err) {
            return { physics: new Set(), chemistry: new Set() };
        }
    }

    function saveStarMap() {
        const payload = {
            physics: Array.from(starMap.physics || []),
            chemistry: Array.from(starMap.chemistry || [])
        };
        localStorage.setItem('flashcardStars', JSON.stringify(payload));
    }

    function isStarred(card) {
        const key = normalizeTerm(card.term);
        const set = currentSubject === 'physics' ? starMap.physics : starMap.chemistry;
        return set.has(key);
    }

    // ----- Filter function -----
    function applyFilter() {
        const query = searchQuery.trim().toLowerCase();
        if (query === '') {
            filteredDeck = [...masterDeck];
        } else {
            filteredDeck = masterDeck.filter(card => 
                card.term.toLowerCase().includes(query) || 
                card.definition.toLowerCase().includes(query)
            );
        }
        if (showStarredOnly) {
            const set = currentSubject === 'physics' ? starMap.physics : starMap.chemistry;
            filteredDeck = filteredDeck.filter(card => set.has(normalizeTerm(card.term)));
        }
        // Clamp index
        if (filteredDeck.length === 0) {
            currentIndex = 0;
        } else if (currentIndex >= filteredDeck.length) {
            currentIndex = filteredDeck.length - 1;
        }
        definitionVisible = false;
        updateDisplay();
    }

    function updateDisplay() {
        if (!filteredDeck.length) {
            termDisplay.textContent = '🔍 No matches';
            definitionDisplay.textContent = '';
            definitionDisplay.classList.add('hidden-def');
            cardCounter.textContent = `0 / 0`;
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            return;
        }
        const card = filteredDeck[currentIndex];
        termDisplay.textContent = card.term;
        definitionDisplay.textContent = card.definition;

        const starred = isStarred(card);
        starBtn.textContent = starred ? '★ Starred' : '☆ Star';
        starBtn.classList.toggle('active', starred);
        
        if (definitionVisible) {
            definitionDisplay.classList.remove('hidden-def');
            flashcardDiv.classList.add('blur');
        } else {
            definitionDisplay.classList.add('hidden-def');
            flashcardDiv.classList.remove('blur');
        }
        
        cardCounter.textContent = `${currentIndex+1} / ${filteredDeck.length}`;
        prevBtn.disabled = (currentIndex === 0);
        nextBtn.disabled = (currentIndex === filteredDeck.length - 1);
    }

    // Subject switching
    function setSubject(subject) {
        currentSubject = subject;
        if (subject === 'physics') {
            masterDeck = [...physicsMaster];
            subjectTitle.textContent = '🔭 Physics';
            btnPhysics.classList.add('active');
            btnChemistry.classList.remove('active');
        } else {
            masterDeck = [...chemistryMaster];
            subjectTitle.textContent = '🧪 Chemistry';
            btnChemistry.classList.add('active');
            btnPhysics.classList.remove('active');
        }
        // Clear search when switching subjects
        searchInput.value = '';
        searchQuery = '';
        applyFilter();  // sets filteredDeck = masterDeck
        currentIndex = 0;
        definitionVisible = false;
        updateDisplay();
    }

    function toggleStarForCurrent() {
        if (!filteredDeck.length) return;
        const card = filteredDeck[currentIndex];
        const key = normalizeTerm(card.term);
        const set = currentSubject === 'physics' ? starMap.physics : starMap.chemistry;
        if (set.has(key)) {
            set.delete(key);
        } else {
            set.add(key);
        }
        saveStarMap();
        applyFilter();
        updateDisplay();
    }

    function toggleStarFilter() {
        showStarredOnly = !showStarredOnly;
        toggleStarFilterBtn.classList.toggle('toggle-active', showStarredOnly);
        toggleStarFilterBtn.textContent = showStarredOnly ? '★ Starred Only' : '★ Show Starred';
        applyFilter();
        currentIndex = 0;
        definitionVisible = false;
        updateDisplay();
    }

    // Navigation
    function toggleDefinition() {
        if (!filteredDeck.length) return;
        definitionVisible = !definitionVisible;
        updateDisplay();
    }

    function nextCard() {
        if (currentIndex < filteredDeck.length - 1) {
            currentIndex++;
            definitionVisible = false;
            updateDisplay();
        }
    }

    function prevCard() {
        if (currentIndex > 0) {
            currentIndex--;
            definitionVisible = false;
            updateDisplay();
        }
    }

    // Shuffle: applies to masterDeck, then reapply filter
    function shuffleDeck() {
        if (masterDeck.length < 2) return;
        for (let i = masterDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [masterDeck[i], masterDeck[j]] = [masterDeck[j], masterDeck[i]];
        }
        applyFilter();  // re-filter
        currentIndex = 0;
        definitionVisible = false;
        updateDisplay();
    }

    // Reset: clear search, restore original order (reload from physicsMaster/chemistryMaster)
    function resetDeck() {
        // Reset master to original order (deep copy)
        if (currentSubject === 'physics') {
            masterDeck = parseGlossary(physicsRaw);
        } else {
            masterDeck = parseGlossary(chemistryRaw);
        }
        searchInput.value = '';
        searchQuery = '';
        applyFilter();
        currentIndex = 0;
        definitionVisible = false;
        updateDisplay();
    }

    // Search input handler
    function onSearchInput() {
        searchQuery = searchInput.value;
        applyFilter();
        currentIndex = 0;
        definitionVisible = false;
    }

    function clearSearch() {
        searchInput.value = '';
        searchQuery = '';
        applyFilter();
        currentIndex = 0;
        definitionVisible = false;
        searchInput.blur();
    }

    // Initialize function: assign DOM elements, attach listeners, set initial state
    function init() {
        termDisplay = document.getElementById('termDisplay');
        definitionDisplay = document.getElementById('definitionDisplay');
        cardCounter = document.getElementById('cardCounter');
        subjectTitle = document.getElementById('subjectTitle');
        flashcardDiv = document.getElementById('flashcard');
        prevBtn = document.getElementById('prevBtn');
        nextBtn = document.getElementById('nextBtn');
        shuffleBtn = document.getElementById('shuffleBtn');
        resetBtn = document.getElementById('resetProgressBtn');
        btnPhysics = document.getElementById('btnPhysics');
        btnChemistry = document.getElementById('btnChemistry');
        searchInput = document.getElementById('searchInput');
        clearSearchBtn = document.getElementById('clearSearchBtn');
        starBtn = document.getElementById('starBtn');
        toggleStarFilterBtn = document.getElementById('toggleStarFilterBtn');

        // Event listeners
        flashcardDiv.addEventListener('click', toggleDefinition);
        prevBtn.addEventListener('click', prevCard);
        nextBtn.addEventListener('click', nextCard);
        shuffleBtn.addEventListener('click', shuffleDeck);
        resetBtn.addEventListener('click', resetDeck);
        starBtn.addEventListener('click', toggleStarForCurrent);
        toggleStarFilterBtn.addEventListener('click', toggleStarFilter);
        btnPhysics.addEventListener('click', () => setSubject('physics'));
        btnChemistry.addEventListener('click', () => setSubject('chemistry'));
        searchInput.addEventListener('input', onSearchInput);
        clearSearchBtn.addEventListener('click', clearSearch);

        // Keyboard shortcuts
        window.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'f') {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
            }
            if (e.key === 'Escape') {
                if (searchInput.value !== '') {
                    e.preventDefault();
                    clearSearch();
                } else {
                    searchInput.blur();
                }
            }
            if (document.activeElement !== searchInput) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    prevCard();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    nextCard();
                } else if (e.key === ' ' || e.key === 'Space') {
                    e.preventDefault();
                    toggleDefinition();
                }
            } else {
                if (e.key === ' ' || e.key === 'Space') {
                    e.stopPropagation();
                }
            }
        });

        // Initial UI state
        toggleStarFilterBtn.textContent = '★ Show Starred';
        setSubject('physics');


        const sl = new SiteLoader(
        //    [
        //      {
        //        sources: [
        //          {
        //            sourceType: 'image',
        //            selectors: ['.img-1']
        //          }
        //        ]
        //      }
        //    ]
        );

        const loadingBar = document.querySelector('.loading-colour');
        const loadingContainer = document.querySelector('.loading-container');
        const loadingNumber = document.querySelector('.loading-num');

        sl.addEventListener('progress', (e) => {
            loadingBar.style.transform = `translateX(-${100 - e.progress}%)`
        });

        sl.addEventListener('countComplete', () => {
            loadingNumber.textContent = "Ka Chow";
            document.body.style.overflow = 'auto';
            document.body.classList.add('hide-scrollbar');
            loadingContainer.classList.add('loading-disappear')
        });

        loadingContainer.addEventListener('transitionend', () => {
            loadingContainer.style.display = 'none'
        });

        sl.setTargetTextDom('.loading-num');
        sl.needSpeedUp = true;

        console.log(document.querySelectorAll('.selected'));

        sl.startLoad();

    }

    // Auto-init when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }