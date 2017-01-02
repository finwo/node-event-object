uglifyjs:
	{ echo "// Build by" $$(whoami) "@" $$(date) ; uglifyjs -c -m -- dist/event-object.js ; } > dist/event-object.min.js
